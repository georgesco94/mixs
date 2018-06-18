describe("first test" ,function(){
  it('finds the search', function() {
    cy.visit('http://localhost:3000/');
    cy.get('.input-field');
  });
});
