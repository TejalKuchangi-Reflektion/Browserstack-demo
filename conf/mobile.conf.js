exports.config = {
  user: 'abhiteju1',
  key: 'n2bXP3Rik8j5qux1FqeC',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      browserName: 'chrome',
      name: 'mobile_view',
      build: 'cucumber-js-browserstack',
      realMobile: true,
      device: 'iPhone 6S Plus',
      os_version: '11.4',
    },
  ],
};
