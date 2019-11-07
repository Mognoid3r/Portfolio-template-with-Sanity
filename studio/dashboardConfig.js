export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5dc48193d74a2501e4d7f5e5',
                  title: 'Sanity Studio',
                  name: 'Portfolio-template-with-Sanity-studio',
                  apiId: '26f99d4e-84dc-486b-8050-f1c70278a7be'
                },
                {
                  buildHookId: '5dc481936b536201827a6f6b',
                  title: 'Portfolio Website',
                  name: 'Portfolio-template-with-Sanity',
                  apiId: '5ff093b2-9997-49a6-89dd-ddad98ea25d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Mognoid3r/Portfolio-template-with-Sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://Portfolio-template-with-Sanity.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
