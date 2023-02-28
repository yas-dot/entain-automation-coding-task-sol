describe('Category Filters', () => {
  it('Should filter races with Thoroughbred', () => {
    cy.visit('');
    cy.get('[class=filter-checkbox]').eq(1).click();
    cy.get('[class=filter-checkbox]').last().click();
    cy.wait(5);
  });

  it('Should filter races with Greyhound', ()=>{
    cy.visit('');
    cy.get('[class=filter-checkbox]').first().click();
    cy.get('[class=filter-checkbox]').last().click();
    cy.wait(5);
  });

  it('Should filter races with Harness', ()=>{
    cy.visit('');
    cy.get('[class=filter-checkbox]').first().click();
    cy.get('[class=filter-checkbox]').eq(1).click();
    cy.wait(5);
  });
});
