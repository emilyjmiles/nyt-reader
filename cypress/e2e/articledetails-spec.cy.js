describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=w5xv1NouT0t0kG7pUWSLa5Il5c0E9p1H', {
      statusCode: 200,
      ok: true,
      fixture: 'articles'
    });
    cy.visit('http://localhost:3000/');
    cy.get('[href="/2"]').click();
    cy.url('http://localhost:3000/2');
  });

  it('should have app logo and a single article\'s image and details', () => {
    cy.get('[data-cy="logo"]').should('exist');
    cy.get('[data-cy="details-view"]').should('exist');
    cy.get('[data-cy="details-image"]').should('exist');
    cy.get('[data-cy="details-info"]')
      .should('exist')
      .contains('Section');
    cy.get('[data-cy="section-container"]')
      .should('exist')
      .contains('us');
    cy.get('[data-cy="details-title"]')
      .should('exist')
      .contains('California storm damage could top $1 billion.');
    cy.get('[data-cy="details-byline"]')
      .should('exist')
      .contains('By Christopher Flavelle');
    cy.get('[data-cy="details-published"]')
      .should('exist')
      .contains('First Published: 10 Jan 2023');
    cy.get('[data-cy="details-updated"]')
      .should('exist')
      .contains('Last Updated: 10 Jan 2023');
    cy.get('[data-cy="details-abstract"]')
      .should('exist')
      .contains('Article Abstract: Major weather disasters have been striking the United States much more often in recent years as the global climate changes.');
    cy.get('[data-cy="keywords-container"]').should('exist');
    cy.get('[data-cy="single-keyword"]')
      .should('exist')
      .should('have.length', 5)
      .contains('National Oceanic and Atmospheric Administration');
    cy.get('[data-cy="article-link"]')
      .should('exist')
      .contains('Click here to view the full article');
  });

  it('should not have top stories header, search form, or article cards', () => {
    cy.get('[data-cy="top-stories"]').should('not.exist');
    cy.get('[data-cy="search-form"]').should('not.exist');
    cy.get('[data-cy="articles-container"]').should('not.exist');
    cy.get('[data-cy="article-card"]').should('not.exist');
    cy.get('[data-cy="article-image"]').should('not.exist');
    cy.get('[data-cy="article-title"]').should('not.exist');
    cy.get('[data-cy="article-date"]').should('not.exist');
    cy.get('[data-cy="section-input"]').should('not.exist');
    cy.get('[data-cy="title-input"]').should('not.exist');
    cy.get('[data-cy="search-no-results"]').should('not.exist');
    cy.get('[data-cy="clear-button"]').should('not.exist');
  });

  it('should be able return to the home page on button click', () => {
    cy.get('[data-cy="home-button"]')
      .should('exist')
      .contains('Back to Top Stories')
      .click();
    cy.url('http://localhost:3000/');
  });
});