const backToHome = {
  extra: {
    classNames: ['back-to-home', 'icon-small'],
    icon: 'img/arrow-Left.svg',
  },
  href: '/docs/welcome-to-libra',
  label: 'Home',
  type: 'link',
};

const getReference = (theme = 'primary') => {
  const classNames = [];

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
        type: 'doc',
        id: 'reference/glossary',
        extra: {
          icon: 'img/Terminology.svg',
        },
      },
      {
        type: 'doc',
        id: 'reference/roadmap',
        extra: {
          icon: 'img/Roadmap.png',
        },
      },
      {
        type: 'doc',
        id: 'reference/compliance',
        extra: {
          icon: 'img/Compliance.svg',
        }
      }
    ],
  };
};

module.exports = {
  backToHome,
  getReference,
};
