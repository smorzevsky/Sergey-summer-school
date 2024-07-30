const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'cypress_test@test.com',
    password: 'TDL2024',
  },
  e2e: {
    baseUrl:'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
""