import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const repoUrl = 'https://github.com/garrytan/gstack.git';
const sourceDir = path.resolve('.cache/gstack');
const outputDir = path.resolve('docs/workflows/generated');

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseFrontmatter(markdown: string) {
  if (!markdown.startsWith('---')) return { data: {}, body: markdown };
  const end = markdown.indexOf('\n---', 3);
  if (end === -1) return { data: {}, body: markdown };

  const raw = markdown.slice(3, end).trim();
  const body = markdown.slice(end + 4).trim();
  const data: Record<string, string> = {};

  for (const line of raw.split('\n')) {
    const index = line.indexOf(':');
    if (index === -1) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^['"]|['"]$/g, '');
    data[key] = value;
  }

  return { data, body };
}

async function discoverSkillFiles(root: string) {
  const entries = await readdir(root, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith('.')) continue;
    const skillPath = path.join(root, entry.name, 'SKILL.md');
    if (existsSync(skillPath)) files.push(skillPath);
  }

  return files.sort();
}

function classifyStage(slug: string) {
  if (slug.includes('office') || slug.includes('ceo')) return 'Think';
  if (slug.includes('plan') || slug.includes('spec') || slug.includes('autoplan')) return 'Plan';
  if (slug.includes('design')) return 'Design';
  if (slug.includes('review') || slug.includes('investigate') || slug.includes('cso')) return 'Review';
  if (slug.includes('qa') || slug.includes('browse') || slug.includes('benchmark')) return 'Test';
  if (slug.includes('ship') || slug.includes('deploy') || slug.includes('canary')) return 'Ship';
  if (slug.includes('document') || slug.includes('learn') || slug.includes('retro')) return 'Reflect';
  return 'Workflow';
}

function workflowMarkdown(args: {
  title: string;
  slug: string;
  sourcePath: string;
  description: string;
  stage: string;
  body: string;
}) {
  const excerpt = args.body.split('\n').slice(0, 80).join('\n');

  return `---\ntitle: ${args.title}\nslug: ${args.slug}\nsource: gstack\nsourcePath: ${args.sourcePath}\nstage: ${args.stage}\ntype: workflow\n---\n\n# ${args.title}\n\n## Source\n\nImported from gstack source file:\n\n\`\`\`text\n${args.sourcePath}\n\`\`\`\n\n## Description\n\n${args.description || 'No description found in frontmatter.'}\n\n## Stage\n\n${args.stage}\n\n## Raw Skill Excerpt\n\nThe generated importer keeps an excerpt first. Later phases should convert this into a curated workflow page with inputs, process, outputs, checklist, and related workflows.\n\n${excerpt}\n`;
}

async function main() {
  await mkdir('.cache', { recursive: true });
  await mkdir(outputDir, { recursive: true });

  if (!existsSync(sourceDir)) {
    execFileSync('git', ['clone', '--depth', '1', repoUrl, sourceDir], { stdio: 'inherit' });
  } else {
    execFileSync('git', ['-C', sourceDir, 'pull', '--ff-only'], { stdio: 'inherit' });
  }

  const skillFiles = await discoverSkillFiles(sourceDir);
  const indexRows: string[] = [];

  for (const file of skillFiles) {
    const raw = await readFile(file, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const skillName = path.basename(path.dirname(file));
    const slug = slugify(skillName);
    const title = data.name || skillName;
    const description = data.description || '';
    const stage = classifyStage(slug);
    const sourcePath = path.relative(sourceDir, file);

    await writeFile(
      path.join(outputDir, `${slug}.md`),
      workflowMarkdown({ title, slug, sourcePath, description, stage, body })
    );

    indexRows.push(`| [${title}](./generated/${slug}.md) | ${stage} | ${sourcePath} |`);
  }

  const index = `# Generated GStack Workflow Index\n\nGenerated from \`${repoUrl}\`.\n\n| Workflow | Stage | Source |\n|---|---|---|\n${indexRows.join('\n')}\n`;
  await writeFile(path.join(outputDir, 'index.md'), index);

  console.log(`Generated ${skillFiles.length} workflow pages in ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
