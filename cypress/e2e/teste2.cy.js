describe('template spec', () => {
  beforeEach(() => {
    cy.visitarTela()
  })
  it('enviarFormulario', () => {
    cy.enviarFormulario_1()
  })

  it('enviarFormulario', () => {
    cy.enviarFormulario_2()
  })
  it('enviarFormulario', () => {
    cy.enviarFormulario_3()
  })
})