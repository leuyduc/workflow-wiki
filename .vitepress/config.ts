import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Workflow Wiki',
  description: 'AI workflow operating manual powered by gstack-style knowledge sources.',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Lifecycle', link: '/stages/lifecycle' },
      { text: 'Workflows', link: '/workflows/' },
      { text: 'Prompts', link: '/prompts/' },
      { text: 'Checklists', link: '/checklists/' }
    ],
    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Core Thesis', link: '/core-thesis.vi' },
          { text: 'Source Evaluation', link: '/source-evaluation.vi' },
          { text: 'GStack Overview', link: '/gstack-overview.vi' },
          { text: 'Hermes Evolution', link: '/hermes-evolution/from-fable-5-prompt.vi' },
          { text: 'Oh My OpenAgent Lessons', link: '/agent-os/oh-my-openagent-lessons.vi' },
          { text: 'AI Agent Project Structure', link: '/project-structure/ai-agent-project-structure.vi' },
          { text: 'Project Plan', link: '/project-plan' }
        ]
      },
      {
        text: 'Lifecycle',
        items: [
          { text: 'Sprint Lifecycle', link: '/stages/lifecycle' },
          { text: 'Lucky Agent OS Layers', link: '/layers/' },
          { text: 'Intent Routing', link: '/layers/intent-routing.vi' },
          { text: 'Workflow Lifecycle', link: '/layers/workflow-lifecycle.vi' },
          { text: 'Skill / Role Specialization', link: '/layers/skill-role-specialization.vi' },
          { text: 'Tool Protocol', link: '/layers/tool-protocol.vi' },
          { text: 'Evidence Gate', link: '/layers/evidence-gate.vi' },
          { text: 'Memory / Learning Loop', link: '/layers/memory-learning-loop.vi' },
          { text: 'Project Structure / Runbooks', link: '/layers/project-structure-runbooks.vi' }
        ]
      },
      {
        text: 'Library',
        items: [
          { text: 'Workflows', link: '/workflows/' },
          { text: 'Office Hours', link: '/workflows/generated/office-hours.vi' },
          { text: 'Autoplan', link: '/workflows/generated/autoplan.vi' },
          { text: 'Plan CEO Review', link: '/workflows/generated/plan-ceo-review.vi' },
          { text: 'Plan Engineering Review', link: '/workflows/generated/plan-eng-review.vi' },
          { text: 'Plan Design Review', link: '/workflows/generated/plan-design-review.vi' },
          { text: 'Design Review', link: '/workflows/generated/design-review.vi' },
          { text: 'Review', link: '/workflows/generated/review.vi' },
          { text: 'QA', link: '/workflows/generated/qa.vi' },
          { text: 'Ship', link: '/workflows/generated/ship.vi' },
          { text: 'Document Release', link: '/workflows/generated/document-release.vi' },
          { text: 'Specialists', link: '/specialists/' },
          { text: 'Prompts', link: '/prompts/' },
          { text: 'Checklists', link: '/checklists/' },
          { text: 'Templates', link: '/templates/' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/leuyduc/workflow-wiki' }
    ]
  }
});
