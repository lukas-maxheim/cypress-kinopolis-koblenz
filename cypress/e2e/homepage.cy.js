/// <reference types="cypress" />

describe('Homepage', () => {

  const selectorForCookieBotAcceptButton = '#accept-selected-button';

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Logo links to the homepage', () => {
    cy.get('.logo.logo--ko')
      .contains('Kinopolis')
      .should('exist')
      .should('not.be.visible');

    cy.acceptCookieBot(selectorForCookieBotAcceptButton);

    cy.get('.logo.logo--ko')
      .contains('Kinopolis')
      .should('be.visible');
  });

  it('Cookie consent is working', () => {
    cy.clearCookies();
    cy.getCookies().should('have.length', 0);

    cy.get('#accept-selected-button')
      .should('exist')
      .should('be.visible');

    cy.get('#cc_1')
      .should('be.checked')
      .should('be.disabled');

    cy.getCookies().should('have.length', 0);

    cy.acceptCookieBot(selectorForCookieBotAcceptButton);
  });

  it('Company name is included in footer', () => {
    cy.get('footer .hl--2.hl--bb')
      .contains('KINOPOLIS Koblenz');
  });

  it('Imprint link is clickable', () => {
    cy.acceptCookieBot(selectorForCookieBotAcceptButton);
    cy.validateImprintLinkIsClickable('a[title="KINOPOLIS Koblenz - Impressum"]');
  });
})
