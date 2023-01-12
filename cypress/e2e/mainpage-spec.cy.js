describe('NYT Reader Main Page Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=w5xv1NouT0t0kG7pUWSLa5Il5c0E9p1H', {
      statusCode: 200,
      ok: true,
      fixture: 'articles'
    });
    cy.visit('http://localhost:3000/');
  });

  it('should have a logo, top stories header, a search form, and article cards', () => {
    cy.get('[data-cy="logo"]').should('exist');
    cy.get('[data-cy="top-stories"]')
      .should('exist')
      .contains('Today\'s Top Stories');
    cy.get('[data-cy="search-form"]').should('exist');
    cy.get('[data-cy="articles-container"]').should('exist');
    cy.get('[data-cy="article-card"]')
      .should('exist')
      .should('have.length', 5);
  });

  it('should have an image, title, and date on each article card', () => {
    cy.get('[data-cy="article-image"]').should('exist');
    cy.get('[data-cy="article-title"]')
      .should('exist')
      .contains('A Day-by-Day Look at California\'s Weather');
    cy.get('[data-cy="article-date"]')
      .should('exist')
      .contains('5 Jan 2023');
  });

  it('should be able to sort articles by section', () => {
    cy.get('[data-cy="section-input"]').select('europe');
    cy.get('[data-cy="title-input"]').should('have.value', '');
    cy.get('[data-cy="article-card"]')
      .should('exist')
      .should('have.length', 1);
    cy.get('[data-cy="article-image"]').should('exist');
    cy.get('[data-cy="article-title"]')
      .should('exist')
      .contains('Russia posts a $47 billion budget deficit for 2022, its second highest in the post-Soviet era.');
    cy.get('[data-cy="article-date"]')
      .should('exist')
      .contains('10 Jan 2023');
  });

  it('should be able to select a different section to sort articles by', () => {
    cy.get('[data-cy="section-input"]').select('us');
    cy.get('[data-cy="title-input"]').should('have.value', '');
    cy.get('[data-cy="article-card"]')
      .should('exist')
      .should('have.length', 4);
    cy.get('[data-cy="article-image"]').should('exist');
    cy.get('[data-cy="article-title"]')
      .should('exist')
      .contains('Biden Lawyers Found Classified Material at His Former Office');
    cy.get('[data-cy="article-date"]')
      .should('exist')
      .contains('9 Jan 2023');
  });

  it('should be able to search articles by title without being case sensitive', () => {
    cy.get('[data-cy="title-input"]').type('sToRm');
    cy.get('[data-cy="section-input"]').should('have.value', null);
    cy.get('[data-cy="article-card"]')
      .should('exist')
      .should('have.length', 2);
    cy.get('[data-cy="article-image"]').should('exist');
    cy.get('[data-cy="article-title"]')
      .should('exist')
      .contains('California storm damage could top $1 billion.');
    cy.get('[data-cy="article-date"]')
      .should('exist')
      .contains('10 Jan 2023');
    cy.get('[data-cy="search-no-results"]').should('not.exist');
  });

  it('should have an error message if search results are not found', () => {
    cy.get('[data-cy="title-input"]').type('war');
    cy.get('[data-cy="section-input"]').should('have.value', null);
    cy.get('[data-cy="article-card"]').should('not.exist');
    cy.get('[data-cy="search-no-results"]')
      .should('exist')
      .contains('No results found. Please try using a different search term.');
  });

  it('should be able to clear search inputs to view all article cards again', () => {
    cy.get('[data-cy="clear-button"]').click();
    cy.get('[data-cy="section-input"]').should('have.value', null);
    cy.get('[data-cy="title-input"]').should('have.value', '');
    cy.get('[data-cy="article-card"]')
      .should('exist')
      .should('have.length', 5);
    cy.get('[data-cy="search-no-results"]').should('not.exist');
  });

  it('should not have full article details', () => {
    cy.get('[data-cy="details-view"]').should('not.exist');
    cy.get('[data-cy="details-image"]').should('not.exist');
    cy.get('[data-cy="details-info"]').should('not.exist');
    cy.get('[data-cy="section-container"]').should('not.exist');
    cy.get('[data-cy="details-title"]').should('not.exist');
    cy.get('[data-cy="details-byline"]').should('not.exist');
    cy.get('[data-cy="details-published"]').should('not.exist');
    cy.get('[data-cy="details-updated"]').should('not.exist');
    cy.get('[data-cy="details-abstract"]').should('not.exist');
    cy.get('[data-cy="keywords-container"]').should('not.exist');
    cy.get('[data-cy="single-keyword"]').should('not.exist');
    cy.get('[data-cy="article-link"]').should('not.exist');
  });

  it('should be able click on an article card to view more details', () => {
    cy.get('[href="/2"]').click();
    cy.url('http://localhost:3000/2');
    // may want to refactor article card Link to implement a data-cy tag on click to comply with best practices
  });
});