const backToHome = {
  extra: {
    classNames: ['backToHome', 'iconSmall'],
    icon: 'img/arrow-left.svg',
  },
  href: '/docs/welcome-to-libra-v2',
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
          iconDark: 'img/terminology-dark.svg',
        },
      },
      {
        type,
        id: 'reference/roadmap',
        extra: {
          icon: 'img/roadmap.png',
          iconDark: 'img/reference-dark.svg',
        },
      },
      {
        type,
        id: 'reference/compliance',
        extra: {
          icon: 'img/compliance.svg',
          iconDark: 'img/compliance-dark.svg',
        }
      }
    ],
  };
};

module.exports = {
  backToHome,
  getReference,
};
