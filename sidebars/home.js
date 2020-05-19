const {getReference} = require('./components');

const Sidebar = [
  {
    type: 'doc',
    id: 'welcome-to-libra',
    extra: {
      classNames: ['label'],
      icon: 'img/home.svg',
    }
  },
  {
    type: 'category',
    label: 'Developers',
    items: [
      {
        type: 'ref',
        id: 'core/overview',
        extra: {
          icon: 'img/core-contributors-sm.svg',
        }
      },
      {
        type: 'ref',
        id: 'merchant/overview',
        extra: {
          icon: 'img/merchant-solutions-sm.svg',
        }
      },
      {
        type: 'ref',
        id: 'wallet-app/overview',
        extra: {
          icon: 'img/wallet-app-sm.svg',
        }
      },
      {
        type: 'ref',
        id: 'move/overview',
        extra: {
          icon: 'img/move.svg',
        }
      },
      {
        type: 'ref',
        id: 'node/overview',
        extra: {
          icon: 'img/node-operators.svg',
        }
      }
    ],
  },
  getReference(),
];

module.exports = Sidebar;
