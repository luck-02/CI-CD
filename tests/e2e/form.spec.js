describe('Form Submission', () => {
  it('submits the form and shows the user', () => {
    cy.visit('/');
    cy.get('input[name="name"]').type('Alice');
    cy.get('input[name="email"]').type('alice@example.com');
    cy.get('button').click();
    cy.url().should('include', '/submissions');
    cy.contains('Alice');
  });
});
