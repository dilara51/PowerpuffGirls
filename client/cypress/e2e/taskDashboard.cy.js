describe('Task Dashboard UI', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.wait(1500); // Sicherheitswartezeit
    cy.screenshot(); // Visueller Beweis, ob UI geladen wurde
  });

  it('does NOT add empty task (negative test)', () => {
    cy.get('[data-testid="add-task-btn"]').click();
    cy.get('[data-testid="task-item"]').should('not.exist');
  });
});
