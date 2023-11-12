const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/junit/test-results-[hash].xml',
      },
      cypressMochawesomeReporterReporterOptions: {
        charts: true
      },
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});