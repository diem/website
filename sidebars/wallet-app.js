const {backToHome, getReference} = require('./components');

const Sidebar = [
   backToHome,
  {
    extra: {
      classNames: ['categoryLabel', 'spacerMD'],
      icon: 'img/wallet-app.svg',
      iconDark: 'img/wallet-app-dark.svg',
      iconClasses: ['iconLeft'],
      noLink: true,
    },
    id: 'wallet-app/overview',
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex', 'normalWeight'],
    },
    href: '/docs/wallet-app/overview',
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
      'wallet-app/intro-to-lrw',
      'wallet-app/wallet-arch',
      'wallet-app/liquidity',
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
      'wallet-app/public-demo-wallet',
      'wallet-app/try-local-web-wallet',
      'wallet-app/try-local-mobile-wallet',
      'wallet-app/try-wallet-admin',
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
      'wallet-app/set-up-reference-wallet',
      'wallet-app/login-and-auth',
      'wallet-app/custody-mod',
      'wallet-app/compliance-mod',
      'wallet-app/risk-mod',
      'wallet-app/trxn-wf',
      'wallet-app/storage-mod',
      'wallet-app/service-api',
      'wallet-app/pubsub',
      'wallet-app/liquidity-mod',
      'wallet-app/admin-mod',
      'wallet-app/localizn',
      'wallet-app/public-demo-wallet',
      {
        type: 'link',
        href: 'https://demo-wallet.libra.org/api/apidocs',
        label: 'Backend Swagger API',
      },
    ]
  },
  getReference('secondary'),
];

module.exports = Sidebar;

