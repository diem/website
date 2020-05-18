const backToHome = {
  extra: {
    classNames: ['back-to-home', 'icon-small'],
    icon: 'img/arrow-left.svg',
  },
  href: '/docs/welcome-to-libra',
  label: 'Home',
  type: 'link',
};

const getReference = (theme = 'primary') => {
  const classNames = [];
  const type = theme === 'primary' ? 'doc' : 'ref';

  if (theme === 'secondary') {
    classNames.push({
      global: true,
      name: 'margin-top--md',
    });
  }

  return {
    extra: {
      classNames: classNames,
    },
    label: 'Reference', 
    type: 'category',
    items: [
      {
        type,
        id: 'reference/glossary',
        extra: {
          icon: 'img/terminology.svg',
        },
      },
      {
        type,
        id: 'reference/roadmap',
        extra: {
          icon: 'img/roadmap.png',
        },
      },
      {
        type,
        id: 'reference/compliance',
        extra: {
          icon: 'img/compliance.svg',
        }
      }
    ],
  };
};

module.exports = {
  backToHome,
  getReference,
};
