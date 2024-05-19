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

const { faker } = require('@faker-js/faker');

// Comando personalizado para generar datos ficticios
Cypress.Commands.add('generateFakerData', () => {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    note: faker.lorem.sentence(),
    label: faker.lorem.word(5),
    name_251: faker.random.alphaNumeric(251),
    email_251: faker.random.alphaNumeric(251),
    note_501: faker.random.alphaNumeric(501),
    label_251: faker.random.alphaNumeric(251),
};
});

Cypress.Commands.add('getRandomIntInRange', (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
});