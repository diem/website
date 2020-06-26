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
    label: 'Concepts',
    type: 'category',
    items: [
      'core/libra-protocol',
      'core/life-of-a-transaction',
      'core/the-libra-blockchain-paper',
      'core/move-paper',
      'core/state-machine-replication-paper',
      'core/libra-core-overview',
    ]
  },
  {
    extra: {
      icon: 'img/tutorials.svg',
      iconDark: 'img/tutorials-dark.svg',
      theme: 'secondary',
    },
    label: 'Tutorials',
    type: 'category',
    items: [
      'core/my-first-transaction',
      'core/move-overview',
      'core/run-local-network',
      'core/run-move-locally',
    ]
  },
  {
    extra: {
      classNames: [],
      icon: 'img/develop.svg',
      iconDark: 'img/develop-dark.svg',
      theme: 'secondary',
    },
    label: 'Develop',
    type: 'category',
    items: [
      'core/libra-open-source-paper',
      'core/contributing',
      'core/coding-guidelines',
      'core/libra-cli',
    ]
  },
  getReference('secondary'),
];

module.exports = Sidebar;
