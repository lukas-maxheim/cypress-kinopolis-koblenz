/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  })

  it('Empty spec', () => {
    cy.contains('Kinopolis');
  })
})
