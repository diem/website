const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['label'],
      icon: 'img/core-contributors.svg',
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
      theme: 'secondary',
    },
    items: ['libra-protocol'],
    label: 'Concepts',
    type: 'category',
  },
  {
    extra: {
      icon: 'img/tutorials.svg',
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
      theme: 'secondary',
    },
    items: ['core/overview-v2'],
    label: 'Develop',
    type: 'category',
  },
  getReference('secondary'),
];

module.exports = Sidebar;
