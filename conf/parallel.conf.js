exports.config = {
  user: 'abhiteju1',
  key: 'n2bXP3Rik8j5qux1FqeC',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: 'parallel_test',
    build: 'cucumber-js-browserstack',
  },

  capabilities: [
    {
      browserName: 'chrome',
      name: 'parallel tests',
    },
    {
      browserName: 'safari',
      name: 'parallel tests',
    },
  ],
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
