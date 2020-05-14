const {getReference} = require('./components');

const Sidebar = [
  {
    type: 'doc',
    id: 'welcome-to-libra',
    extra: {
      classNames: ['label'],
      icon: 'img/Home.svg',
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
          icon: 'img/Core Contributors.svg',
        }
      },
      {
        type: 'ref',
        id: 'merchant/overview',
        extra: {
          icon: 'img/Merchant Solutions.svg',
        }
      },
      {
        type: 'ref',
        id: 'wallet-app/overview',
        extra: {
          icon: 'img/Wallet App.svg',
        }
      },
      {
        type: 'ref',
        id: 'move/overview',
        extra: {
          icon: 'img/Move.svg',
        }
      },
      {
        type: 'ref',
        id: 'node/overview',
        extra: {
          icon: 'img/Node Operators.svg',
        }
      }
    ],
  },
  getReference(),
];

module.exports = Sidebar;
