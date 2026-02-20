describe('Login OrangeHRM dengan Intercept', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  // TC-INT-01 Valid Login
  it('TC-INT-01 Login valid dengan intercept request login', () => {
    cy.intercept('POST', '**/auth/validate').as('loginRequest')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302)
  })

  // TC-INT-02 Password salah
  it('TC-INT-02 Login password salah intercept response', () => {
    cy.intercept('POST', '**/auth/validate').as('invalidLogin')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()

    cy.wait('@invalidLogin')
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC-INT-03 Username salah
  it('TC-INT-03 Login username salah intercept', () => {
    cy.intercept('POST', '**/auth/validate').as('wrongUser')

    cy.get('input[name="username"]').type('Admin123')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@wrongUser')
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC-INT-04 Field kosong
  it('TC-INT-04 Login field kosong tanpa request', () => {
    cy.intercept('POST', '**/auth/validate').as('emptyLogin')

    cy.get('button[type="submit"]').click()

    cy.contains('Required').should('be.visible')
  })

  // TC-INT-05 Verifikasi redirect dashboard
  it('TC-INT-05 Intercept request dashboard setelah login', () => {
    cy.intercept('GET', '**/dashboard/index').as('dashboard')

    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    cy.wait('@dashboard').its('response.statusCode').should('eq', 200)
  })

})