const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    username: 'cypress_test@test.com',
    password: 'TDL2024',
    firstName: 'Cypress', 
    firstName1: 'Sergejs',
    lastName: 'Test',
    lastName1: 'Morzevskis',
    address: 'Brivibas iela 1',
    company: 'TDL School',
    postalCode: 'LV-0000',
    city: 'Riga',
    province: 'Vidzeme',
  },
  e2e: {
    baseUrl:'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});