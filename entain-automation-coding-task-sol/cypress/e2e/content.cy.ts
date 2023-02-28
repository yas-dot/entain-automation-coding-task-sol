/// <reference types="cypress" />
import { RACING_CATEGORIES } from "../config/constants";

describe('Page Content', () => {
  it('Should correctly display page title', () => {
    cy.visit('');
    cy.get('[data-testid=page-title]').contains('Next To Go Races').and('be.visible');
  });

  it('Should have all filters checked by default', () => {
    cy.visit('');
    cy.get('[data-testid=category-filters]').within(() => {
      RACING_CATEGORIES.forEach((category) => {
        cy.get(`[data-testid=category-filter-${category.categoryId}]`).within(() => {
          cy.get('[data-testid=category-filter-label]').contains(category.name).and('be.visible');
          cy.get('[data-testid=category-filter-checkbox]').should('be.checked');
        });
      })
    })
  });

  it('Should display only 5 items at a time', () => {
    cy.visit('');
    cy.get('[class=item]').should("have.length", 5);
  });

  it('Should appear Entain Automation Coding Task as page title', () =>{
    cy.visit('');
    cy.title().should('eq','Entain Automation Coding Task');
  })

});
