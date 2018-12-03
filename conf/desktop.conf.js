exports.config = {
  user: 'abhiteju1',
  key: 'n2bXP3Rik8j5qux1FqeC',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      browserName: 'chrome',
      name: 'desktop_view',
      build: 'cucumber-js-browserstack',
    },
  ],
};
