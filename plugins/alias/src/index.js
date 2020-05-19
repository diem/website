const path = require('path');

module.exports = function(context, options) {
  return {
    name: 'alias-plugin',
    configureWebpack(config, isServer, utils) {
      const {getCacheLoader} = utils;
      return {
        resolve: {
          alias: {
            CSS: path.resolve(__dirname, '../../../src/css'),
            Components: path.resolve(__dirname, '../../../src/components'),
          }
        }
      };
    },
  };
};
