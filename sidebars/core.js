const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['spacer'],
      icon: 'img/core-contributors.svg',
      iconDark: 'img/core-contributors-dark.svg',
      noLink: true,
    },
    id: 'core/overview-v2', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/core/overview-v2',
    label: 'Overview',
    type: 'link',
  },
  {
    extra: {
      icon: 'img/concepts.svg',
      iconDark: 'img/concepts-dark.svg',
      theme: 'secondary',
    },
    items: ['libra-protocol', 'demo'],
    label: 'Concepts',
    type: 'category',
  },
  {
    extra: {
      icon: 'img/tutorials.svg',
      iconDark: 'img/tutorials-dark.svg',
      theme: 'secondary',
    },
    items: ['my-first-transaction', 'run-local-network'],
    label: 'Tutorials',
    type: 'category',
  },
  {
    extra: {
      classNames: [],
      icon: 'img/develop.svg',
      iconDark: 'img/develop-dark.svg',
      theme: 'secondary',
    },
    items: ['core/overview-v2'],
    label: 'Develop',
    type: 'category',
  },
  getReference('secondary'),
];

module.exports = Sidebar;
