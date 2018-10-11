const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
const path = require('path');
// const rewireMobX = require('react-app-rewire-mobx');

/* config-overrides.js */
module.exports = function override(config, env) {
  // config = rewireMobX(config, env);
  config = rewireAliases.aliasesOptions({
        '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
        '@containers': path.resolve(__dirname, `${paths.appSrc}/containers/`),
        '@stores': path.resolve(__dirname, `${paths.appSrc}/stores/`)
    })(config, env)
  return config;
}
