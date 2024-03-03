import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', 'cf6'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', 'ccb'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', 'a21'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', 'ac6'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'b7d'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', '841'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '5fe'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', '1fe'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', 'cf0'),
    exact: true
  },
  {
    path: '/docs/blog/first-blog-post',
    component: ComponentCreator('/docs/blog/first-blog-post', '361'),
    exact: true
  },
  {
    path: '/docs/blog/long-blog-post',
    component: ComponentCreator('/docs/blog/long-blog-post', 'a68'),
    exact: true
  },
  {
    path: '/docs/blog/mdx-blog-post',
    component: ComponentCreator('/docs/blog/mdx-blog-post', '50c'),
    exact: true
  },
  {
    path: '/docs/blog/tags',
    component: ComponentCreator('/docs/blog/tags', '744'),
    exact: true
  },
  {
    path: '/docs/blog/tags/docusaurus',
    component: ComponentCreator('/docs/blog/tags/docusaurus', '979'),
    exact: true
  },
  {
    path: '/docs/blog/tags/facebook',
    component: ComponentCreator('/docs/blog/tags/facebook', 'daa'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hello',
    component: ComponentCreator('/docs/blog/tags/hello', '55b'),
    exact: true
  },
  {
    path: '/docs/blog/tags/hola',
    component: ComponentCreator('/docs/blog/tags/hola', '7e3'),
    exact: true
  },
  {
    path: '/docs/blog/welcome',
    component: ComponentCreator('/docs/blog/welcome', '29a'),
    exact: true
  },
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '556'),
    exact: true
  },
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', 'a36'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '3ce'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '50e'),
            routes: [
              {
                path: '/docs/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/docs/category/tutorial---basics', 'ab3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/docs/category/tutorial---extras', 'a37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/intro',
                component: ComponentCreator('/docs/docs/intro', 'e37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docs/tutorial-basics/congratulations', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-blog-post', '646'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-document', '6ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docs/tutorial-basics/create-a-page', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docs/tutorial-basics/deploy-your-site', 'bed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docs/tutorial-basics/markdown-features', '6f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docs/tutorial-extras/manage-docs-versions', '055'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docs/tutorial-extras/translate-your-site', '946'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '673'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
