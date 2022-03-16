const rewireStyledComponents = require('react-app-rewire-styled-components');

module.exports = function override(config, env) {
  let displayName = false;
  if (env === 'development') {
    displayName = true;
  }

  config = rewireStyledComponents(config, env, {
    displayName,
  });

  return config;
}
