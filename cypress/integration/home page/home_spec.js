describe("On home page" ,function(){
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });

  context('On large screen', function(){

    context('Navbar', function(){
      it('contains search field', function() {
        cy.get('.input-field');
      });
      it('Search is focused', function() {
        cy.focused().should('have.class','input-field');
      });
      it('contains search field', function() {

      });
    });

  });

});
