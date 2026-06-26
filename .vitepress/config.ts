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
          { text: 'Project Plan', link: '/project-plan' }
        ]
      },
      {
        text: 'Lifecycle',
        items: [{ text: 'Sprint Lifecycle', link: '/stages/lifecycle' }]
      },
      {
        text: 'Library',
        items: [
          { text: 'Workflows', link: '/workflows/' },
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
