// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Notes',
  tagline: 'Notes and snippets as docs',
  url: 'https://thatGuyAnes.github.io',
  baseUrl: '/notes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thatGuyAnes', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/thatGuyAnes/notes',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thatGuyAnes/notes',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Notes',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'rules',
            position: 'left',
            label: 'Rules',
          },
          {
            type: 'doc',
            docId: 'resources',
            position: 'left',
            label: 'Resources',
          },
          {
            href: 'https://github.com/thatGuyAnes/notes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Rules',
                to: '/docs/rules',
              },
              {
                label: 'Resources',
                to: '/docs/resources',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'My Twitter',
                href: 'https://twitter.com/thatguyanes',
              },
              {
                label: 'My GitHub',
                href: 'https://github.com/thatGuyAnes',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '#100DaysOfCode',
                to: 'https://www.100daysofcode.com/',
              },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
