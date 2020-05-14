function requireUncached(module) {
  delete require.cache[require.resolve(module)];
  return require(module);
}

const Home = requireUncached('./home');
const Core = requireUncached('./core');

module.exports = {
  home: Home,
  core: Core,
};
