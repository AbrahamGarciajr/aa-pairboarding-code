const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


//for end to end testing

//npx cypress open
//this command will open cypress app fo E2E or component testing
//I selected E2E and this file along with the cypress folder was added
