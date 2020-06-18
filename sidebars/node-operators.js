const {backToHome} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['spacer'],
      icon: 'img/node-operators.svg',
      iconDark: 'img/node-operators-dark.svg',
      noLink: true,
    },
    id: 'node/overview', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/node/overview',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;
