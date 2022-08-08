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
                  buildHookId: '62f1016a8fac9d73d1d76e89',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-lame-pics-studio',
                  apiId: 'f128c0dc-166a-40f8-9046-a63ff30a4754'
                },
                {
                  buildHookId: '62f1016aa304d76aa8762ecc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-lame-pics',
                  apiId: 'db403f99-255f-466b-8efd-95eea67ab171'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/melroser/sanity-gatsby-portfolio-lame-pics',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-lame-pics.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
