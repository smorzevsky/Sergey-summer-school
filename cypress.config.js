const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  env: {
    username: 'cypress_test@test.com',
    password: '',
    firstName: 'Cypress', 
    firstName1: 'Sergejs',
    lastName: 'Test',
    lastName1: 'Morzevskis',
    address: 'Brivibas iela 1',
    company: 'TDL School',
    postalCode: 'LV-0000',
    city: 'Riga',
    province: 'Vidzeme',
    firstName2: 'Sergey',
    lastName2: 'Morzevsky',
    address2: 'Zunda krastmala 10',
    postalCode2: 'LV-1048',
    

  },
  e2e: {
    baseUrl:'https://coe-webstore.tdlbox.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});