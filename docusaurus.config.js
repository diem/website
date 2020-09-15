const darkCodeTheme = require("prism-react-renderer/themes/palenight");
const lightCodeTheme = require("prism-react-renderer/themes/github");

module.exports = {
  title: 'Libra Documentation',
  tagline: 'The Libra Association’s mission is to enable a simple global payment system and financial infrastructure that empowers billions of people.',
  url: 'https://developers.libra.org/docs/',
  baseUrl: '/',
  favicon: 'img/shared/favicon.ico',
  organizationName: 'Libra',
  projectName: 'Libra',
  themeConfig: {
    algolia: {
      apiKey: 'eb29b473d27eae9cc46c84eb3a2e4063',
      indexName: 'libra-website',
    },
    prism: {
      darkTheme: darkCodeTheme,
      theme: lightCodeTheme,
    },
    sidebarCollapsible: false,
    siteID: 'developers',
    navbar: {
      title: 'Libra Docs',
    },
  },
  plugins: [
    require.resolve('./plugins/alias/src'),
    require.resolve('./plugins/react-axe-ada-monitoring'),
    require.resolve('libra-docusaurus-components/src/plugin-segment'),
  ],
  presets: [
    [
      require.resolve('./temp-preset'),
      {
        docs: {
          sidebarPath: require.resolve('./sidebars'),
          // Please change this to your repo.
          editUrl: 'https://github.com/libra/website/edit/master',
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/libra/website/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    segment: {
      productionKey: 'Llc3xSsbfceDLVBzwOJKoJSkSHMRoj8V',
      stagingKey: 'qPd2q0d8dRMVcZFIK6ocHjDX8QMT19UW',
    },
  },
};
