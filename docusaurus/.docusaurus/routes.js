import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '335'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '76c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '700'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '3a8'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '2c1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '91c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b14'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '889'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '7e8'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'e66'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '9b8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '934'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f03'),
    routes: [
      {
        path: '/docs/category/tutorial---basics',
        component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/gh-blog-1.docx',
        component: ComponentCreator('/docs/output/word-doc/gh-blog-1.docx', '525'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/git-ligecycle.docx',
        component: ComponentCreator('/docs/output/word-doc/git-ligecycle.docx', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/actions/examples/Using scripts to test your code on a runner .docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/actions/examples/Using scripts to test your code on a runner .docx', 'a84'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/actions/examples/Using scripts to test your code on a runner.docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/actions/examples/Using scripts to test your code on a runner.docx', 'd09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/actions/examples/Using the GitHub CLI on a runner .docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/actions/examples/Using the GitHub CLI on a runner .docx', '1e7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/actions/examples/Using the GitHub CLI on a runner.docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/actions/examples/Using the GitHub CLI on a runner.docx', '348'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/actions/Quickstart for GitHub Actions .docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/actions/Quickstart for GitHub Actions .docx', '48f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/cli/Creating GitHub CLI extensions.docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/cli/Creating GitHub CLI extensions.docx', '20a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/githubdocs/rest/Getting started with the REST API.docx',
        component: ComponentCreator('/docs/output/word-doc/githubdocs/rest/Getting started with the REST API.docx', 'ae2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/svn2git.docx',
        component: ComponentCreator('/docs/output/word-doc/svn2git.docx', '9d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/output/word-doc/temp.docx',
        component: ComponentCreator('/docs/output/word-doc/temp.docx', 'f0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '793'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '68e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'f44'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'e46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/gh-blog-1',
        component: ComponentCreator('/docs/tutorial-basics/gh-blog-1', '2ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/git',
        component: ComponentCreator('/docs/tutorial-basics/git', 'da7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', '4b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/svn2git',
        component: ComponentCreator('/docs/tutorial-basics/svn2git', '3b1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/temp',
        component: ComponentCreator('/docs/tutorial-basics/temp', 'b04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '3ad'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
