const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://automationexercise.com/",
    specPattern: "cypress/e2e/**/*spec.{js,jsx,ts,tsx,feature}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: true,
    videoUploadOnPasses: true,
    viewportHeight: 800,
    viewportWidth: 1280,
  },
});
