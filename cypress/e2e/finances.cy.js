describe('Cadastrar entradas e saídas', () => {
  // hooks
  // beforeEach, before - afterEach, after

  it('Cadastrar uma nova transação de entrada', () => {
    // acessar o site
    cy.visit("https://devfinance-agilizei.netlify.app")

    cy.contains("Nova Transação").click()
    cy.get("#description").type("Mesada")
    cy.get("#amount").type(100)
    cy.get("#date").type("2023-02-01")

    cy.contains("Salvar").click()

    cy.get("tbody tr").should("have.length", 1)
    cy.get("tbody tr").should("have.length.greaterThan", 0)


  });
});