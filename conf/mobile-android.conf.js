exports.config = {
  user: 'abhiteju1',
  key: 'n2bXP3Rik8j5qux1FqeC',
  server: 'hub-cloud.browserstack.com',

  capabilities: [
    {
      browserName: 'chrome',
      name: 'android_mobile_view',
      build: 'cucumber-js-browserstack',
      realMobile: true,
      device: 'Samsung Galaxy S8 Plus',
      os_version: '7.0',
    },
  ],
};
