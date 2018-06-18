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

});
