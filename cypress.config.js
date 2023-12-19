const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",

    viewportHeight: 1080,
    viewportWidth: 1630,

    // screenshotOnRunFailure: true,
    // trashAssetsBeforeRuns: true,

    // reporter: 'mochawesome',
    // projectId: "or9z6u",
    
    env: {
      qa: "https://www.google.com/",
      uat: "https: //yahoo.com/"
    }

  },

  

});
