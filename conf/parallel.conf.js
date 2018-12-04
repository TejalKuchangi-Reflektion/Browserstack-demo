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
      os: 'OS X',
      os_version: 'Mojave',
      browserName: 'Safari',
      browser_version: '12.0',
    },
    {
      os: 'Windows',
      os_version: '10',
      browserName: 'Chrome',
      browser_version: '62.0',
    },
  ],
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
