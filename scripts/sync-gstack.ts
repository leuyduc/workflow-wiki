import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repoUrl = 'https://github.com/garrytan/gstack.git';
const sourceDir = path.resolve('.cache/gstack');
const catalogPath = path.resolve('docs/workflows/gstack-catalog.json');
const generatedIndexPath = path.resolve('docs/workflows/generated/index.md');

type SkillRecord = {
  slug: string;
  name: string;
  title: string;
  description: string;
  stage: string;
  specialist: string;
  sourcePath: string;
  sourceUrl: string;
  triggers: string[];
  headings: string[];
};

function slugify(input: string) {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function parseFrontmatter(markdown: string) {
  if (!markdown.startsWith('---')) return { data: {} as Record<string, string>, body: markdown };
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return { data: {} as Record<string, string>, body: markdown };

  const raw = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const data: Record<string, string> = {};

  for (const line of raw.split('\n')) {
    const index = line.indexOf(':');
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
    if (key) data[key] = value;
  }

  return { data, body };
}

async function walkSkillFiles(root: string) {
  const files: string[] = [];

  async function walk(dir: string) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name === 'SKILL.md') {
        files.push(fullPath);
      }
    }
  }

  await walk(root);
  return files.sort();
}

function classifyStage(slug: string) {
  if (slug.includes('office')) return 'Think';
  if (slug.includes('plan') || slug.includes('spec') || slug.includes('autoplan')) return 'Plan';
  if (slug.includes('design-html') || slug.includes('codex') || slug.includes('guard') || slug.includes('freeze')) return 'Build';
  if (slug.includes('review') || slug.includes('investigate') || slug.includes('cso')) return 'Review';
  if (slug.includes('qa') || slug.includes('browse') || slug.includes('benchmark')) return 'Test';
  if (slug.includes('ship') || slug.includes('deploy') || slug.includes('canary')) return 'Ship';
  if (slug.includes('document') || slug.includes('learn') || slug.includes('retro') || slug.includes('context')) return 'Reflect';
  return 'Workflow';
}

function inferSpecialist(slug: string, description: string) {
  const text = `${slug} ${description}`.toLowerCase();
  if (text.includes('ceo') || text.includes('founder') || text.includes('office')) return 'Founder / Product Strategist';
  if (text.includes('eng')) return 'Engineering Manager';
  if (text.includes('design')) return 'Designer Who Codes';
  if (text.includes('qa') || text.includes('browse')) return 'QA Lead';
  if (text.includes('ship') || text.includes('deploy') || text.includes('canary')) return 'Release Engineer';
  if (text.includes('document') || text.includes('learn') || text.includes('retro')) return 'Technical Writer / Learning Loop';
  if (text.includes('cso') || text.includes('security')) return 'Security Officer';
  if (text.includes('review') || text.includes('investigate')) return 'Staff Engineer';
  return 'Workflow Operator';
}

function extractTriggers(markdown: string) {
  const triggers = new Set<string>();
  const quoted = markdown.matchAll(/"([^"]{3,80})"/g);
  for (const match of quoted) {
    const value = match[1];
    if (/\b(use|asked|when|trigger|qa|ship|review|plan|test|deploy|docs?)\b/i.test(value)) {
      triggers.add(value);
    }
    if (triggers.size >= 8) break;
  }
  return Array.from(triggers);
}

function extractHeadings(markdown: string) {
  return markdown
    .split('\n')
    .filter((line) => /^#{2,3}\s+/.test(line))
    .map((line) => line.replace(/^#+\s+/, '').trim())
    .slice(0, 40);
}

function titleize(slug: string) {
  return slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
}

async function ensureGstack() {
  await mkdir('.cache', { recursive: true });
  if (!existsSync(sourceDir)) {
    execFileSync('git', ['clone', '--depth', '1', repoUrl, sourceDir], { stdio: 'inherit' });
  } else {
    execFileSync('git', ['-C', sourceDir, 'pull', '--ff-only'], { stdio: 'inherit' });
  }
}

function renderGeneratedIndex(records: SkillRecord[]) {
  const rows = records
    .map((r) => `| ${r.title} | ${r.stage} | ${r.specialist} | \`${r.sourcePath}\` |`)
    .join('\n');

  return `# Generated GStack Catalog\n\nGenerated from \`${repoUrl}\`. This is a metadata catalog, not the curated Vietnamese workflow pages. Curated Phase 1 pages live next to this file as \`*.vi.md\`.\n\n| Workflow | Stage | Specialist | Source |\n|---|---|---|---|\n${rows}\n`;
}

async function main() {
  await ensureGstack();
  await mkdir(path.dirname(catalogPath), { recursive: true });
  await mkdir(path.dirname(generatedIndexPath), { recursive: true });

  const skillFiles = await walkSkillFiles(sourceDir);
  const records: SkillRecord[] = [];

  for (const file of skillFiles) {
    const raw = await readFile(file, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const relative = path.relative(sourceDir, file);
    const dirSlug = path.dirname(relative).replace(/\\/g, '/');
    const slug = slugify(dirSlug === '.' ? data.name || 'root' : dirSlug.split('/').join('-'));
    const name = data.name || path.basename(path.dirname(file));
    const description = data.description || '';
    const stage = classifyStage(slug);

    records.push({
      slug,
      name,
      title: titleize(name),
      description,
      stage,
      specialist: inferSpecialist(slug, description),
      sourcePath: relative,
      sourceUrl: `https://github.com/garrytan/gstack/tree/main/${relative}`,
      triggers: extractTriggers(body),
      headings: extractHeadings(body),
    });
  }

  records.sort((a, b) => a.stage.localeCompare(b.stage) || a.slug.localeCompare(b.slug));
  await writeFile(catalogPath, `${JSON.stringify({ repoUrl, generatedAt: new Date().toISOString(), count: records.length, records }, null, 2)}\n`);
  await writeFile(generatedIndexPath, renderGeneratedIndex(records));

  console.log(`Generated gstack catalog with ${records.length} skills`);
  console.log(`Catalog: ${catalogPath}`);
  console.log(`Index: ${generatedIndexPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
