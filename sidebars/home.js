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
          icon: 'img/core-contributors.svg',
        }
      },
      {
        type: 'ref',
        id: 'merchant/overview',
        extra: {
          icon: 'img/merchant-solutions.svg',
        }
      },
      {
        type: 'ref',
        id: 'wallet-app/overview',
        extra: {
          icon: 'img/wallet-app.svg',
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
