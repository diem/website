const {backToHome} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['spacer'],
      icon: 'img/merchant-solutions.svg',
      iconDark: 'img/merchant-solutions-dark.svg',
      noLink: true,
    },
    id: 'merchant/overview', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/merchant/overview',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;
