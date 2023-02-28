describe('Countdown Timer', () => {
  it('Should display timer for all the races', () => {
    cy.visit('');
    cy.get('[class=item] > p').should("have.length", 5);
  });

  it('Should display timer in ascending order', ()=>{
    cy.visit('');
    cy.get('[class=item] > p').then(($els) => {
      return Cypress._.map(Cypress.$.makeArray($els), 'innerText')
    })
  });

  it('Should display R in all the Races', () => {
    cy.visit('');
    cy.get('[class=race-number]').should('have.text', 'R');
  });
});
