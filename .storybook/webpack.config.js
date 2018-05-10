const path = require("path");
const { storyLoader } = require("vue-storybook");

// load the default config generator.
const genDefaultConfig = require("@storybook/vue/dist/server/config/defaults/webpack.config.js");

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  baseConfig.module.rules[1].options = {
    loaders: {
      story: storyLoader
    }
  };

  // Add js, json and vue extension support
  config.resolve.extensions.push(".js", ".vue", ".json");

  // Add alias for @ pointing to src
  config.resolve.alias["@"] = path.resolve("src");

  return config;
};
