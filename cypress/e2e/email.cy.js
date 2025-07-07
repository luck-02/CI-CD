describe('Email validation', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[name="name"]').type('Test');
  });

  it('accepte un email valide et soumet le formulaire', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('form').submit();
    cy.url().should('include', '/submissions');
  });

  it('bloque la soumission avec un email invalide', () => {
    cy.get('input[name="email"]').type('not-an-email');
    cy.get('form').submit();
    cy.url().should('not.include', '/submissions');
  });
});
