var reporter = require('cucumber-html-reporter');

var options = {
  theme: 'bootstrap',
  jsonFile: 'report/cucumber_report.json',
  output: 'report/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0',
    'Test Environment': 'STAGING',
    //    Browser: 'Chrome  54.0.2840.98',
    //    Platform: 'Windows 10',
    Parallel: 'Scenarios',
    Executed: 'On BrowserStack server',
  },
};

reporter.generate(options);
