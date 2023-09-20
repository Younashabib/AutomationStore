// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("Hoover", (elementLocator) => {
  cy.get(elementLocator).trigger("mouseover");
});

Cypress.Commands.add("getFixtureData", (fixturePath) => {
  return cy.fixture(fixturePath).then(function (testData) {
    globalThis.testData = testData;
  });
});

Cypress.Commands.add("getFixtureData", (fixturePath) => {
  return cy.fixture(fixturePath).then(function (testData2) {
    globalThis.testData2 = testData2;
  });
});
