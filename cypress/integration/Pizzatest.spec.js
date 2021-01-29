describe("Pizza input test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Form")
  })

  const sizeInput = () => cy.get('select[name="size"]');
  const styleInput = () => cy.get('input[name="style"]');
  const instructInput = () => cy.get('input[name="instruction"]');
  const pepperoni = () => cy.get('input[name="pepperoni"]');
  const mushroom = () => cy.get('input[name="mushroom"]');
  const submitBtn = () => cy.get('button[id="subbtn"]');

  it( 'it works!', () => {
    expect( 1 + 3 ).to.equal( 4 );
    expect( 2 + 2 ).not.to.equal( 8 );
    }
);

  it("testing inputs", () => {
   
      sizeInput().select('small')
      pepperoni().check()
      mushroom().check()
      instructInput()
        .should("have.value", "")
        .type("Leave at door")
        .should("have.value","Leave at door")
      styleInput().check("chicago")
    })


})