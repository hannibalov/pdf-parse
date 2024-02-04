// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Ignore the 'pdf-parse' library
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^fs$/,
    })
  );
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^url$/,
    })
  );
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^http$/,
    })
  );
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^https$/,
    })
  );
  config.plugins.push(
    new webpack.IgnorePlugin({
      resourceRegExp: /^zlib$/,
    })
  );

  return config;
};
