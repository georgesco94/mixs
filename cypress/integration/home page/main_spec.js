describe("On home page" ,function(){
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });
  context('Navbar', function(){

    it('Is present', function() {
      cy.get('.nav');
    });
    context('Search', function() {
      it('Is present', function() {
        cy.get('.input-field');
      });
      it('Is focused', function() {
        cy.focused().should('have.class','input-field');
      });
      it('Accepts input', function() {
        const inputVal = 'barcelona';
        cy.get('.input-field')
        .type(inputVal)
        .should('have.value',inputVal);
      });
      it('Filters activities', function() {
        const inputVal = 'barcelona';
        cy.get('.input-field')
        .type(inputVal);
        cy.get('.activities-grid').should('have.length',1);
        cy.get('.input-field')
        .type(inputVal);
        cy.get('.activities-box').should('not.exist');
      });
    });

  });
  context('Title', function(){

    it('Is present', function() {
      cy.get('.nav-title');
    });

  });
  context('Banner', function(){

    it('Is present', function() {
      cy.get('.banner');
    });

  });
  context('Grid', function(){

    it('Is present', function() {
      cy.get('.activities-grid');
      cy.get('.activities-grid').should('be.visible')
    });
    it('displays all articles with no search text', function() {
      cy.get('.activities-grid').children().should('have.length',11);
    });
    context('Activity items', function(){

      it('Link to activity page', function() {
        cy.get('.activity-box').first().click();
        cy.url().should('eq', 'http://localhost:3000/events/0')
      });

    });
  });

});
describe("On activity page" ,function(){
  beforeEach(function() {
    cy.visit('http://localhost:3000/events/0');
  });
  context('Nav', function(){

    it('Search bar not visible', function() {
      cy.get('.search-field').should('not.exist');
    });
    it('Title links back to home', function() {
      cy.get('.nav-title').click();
      cy.url().should('eq','http://localhost:3000/');
    });


  });
});
