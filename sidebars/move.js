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
    id: 'move/overview-v2', 
    type: 'doc',
  },
  {
    extra: {
      classNames: ['categoryIndex'],
    },
    href: '/docs/move/overview-v2',
    label: 'Overview',
    type: 'link',
  },
];

module.exports = Sidebar;
