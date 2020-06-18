const {backToHome} = require('./components');

const Sidebar = [
  backToHome,
  {
    extra: {
      classNames: ['spacer'],
      icon: 'img/move.svg',
      iconDark: 'img/move-dark.svg',
      noLink: true,
    },
    id: 'move/overview', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/move/overview',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;
