export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60d12d882d18a1242685bc46',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h2nsgimy',
                  apiId: 'a7726e66-de6a-4835-888f-3ed9e7d63c51'
                },
                {
                  buildHookId: '60d12d891461d1241293833b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vhrmnzpm',
                  apiId: 'e7dff3ac-7a57-4822-8b6b-ca39359592cc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pierluc-ssoucy/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vhrmnzpm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
