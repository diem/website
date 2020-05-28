const {getReference} = require('./components');

const Sidebar = [
  {
    type: 'doc',
    id: 'welcome-to-libra-v2',
    extra: {
      classNames: ['label'],
      icon: 'img/home.svg',
      iconDark: 'img/home-dark.svg',
    },
  },
  {
    type: 'category',
    label: 'Developers',
    items: [
      {
        type: 'ref',
        id: 'core/overview-v2',
        extra: {
          icon: 'img/core-contributors.svg',
          iconDark: 'img/core-contributors-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'merchant/overview',
        extra: {
          icon: 'img/merchant-solutions.svg',
          iconDark: 'img/merchant-solutions-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'wallet-app/overview',
        extra: {
          icon: 'img/wallet-app.svg',
          iconDark: 'img/wallet-app-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'move/overview',
        extra: {
          icon: 'img/move.svg',
          iconDark: 'img/move-dark.svg',
        },
      },
      {
        type: 'ref',
        id: 'node/overview',
        extra: {
          icon: 'img/node-operators.svg',
          iconDark: 'img/node-operators-dark.svg',
        },
      }
    ],
  },
  getReference(),
];

module.exports = Sidebar;
