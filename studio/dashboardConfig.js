export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6096d7256d24e8cb4c7a844a',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rmj5eunv',
                  apiId: 'e2e7bbfa-5e78-4bf9-9b23-64b92e27cc72'
                },
                {
                  buildHookId: '6096d7258f4b5ad57372e214',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-vk118csc',
                  apiId: '1bc2045d-303f-411f-988b-02de2fcdbf89'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nishant8509/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-vk118csc.netlify.app', category: 'apps'}
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
