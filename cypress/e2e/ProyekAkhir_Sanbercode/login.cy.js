import LoginPageProject from '../../pages/LoginPageProject'

const loginPage = new LoginPageProject()

describe('Login Page Test', () => {

  beforeEach(() => {
    loginPage.visit()
  })

  it('TCL-01-Login valid', () => {

    cy.intercept('POST', '**/auth/**').as('loginRequest')

    loginPage.inputUsername('Admin')
    loginPage.inputPassword('admin123')
    loginPage.clickLogin()

    cy.wait('@loginRequest')
    cy.url().should('include', 'dashboard')

  })

  it('TCL-02-Login password salah', () => {
    loginPage.inputUsername('Admin')
    loginPage.inputPassword('wrong')
    loginPage.clickLogin()

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TCL-03-Login username salah', () => {
    loginPage.inputUsername('Admin123')
    loginPage.inputPassword('admin123')
    loginPage.clickLogin()

    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TCL-04-Username kosong', () => {
    loginPage.inputPassword('admin123')
    loginPage.clickLogin()

    cy.contains('Required').should('be.visible')
  })

  it('TCL-05-Password kosong', () => {
    loginPage.inputUsername('Admin')
    loginPage.clickLogin()

    cy.contains('Required').should('be.visible')
  })

  it('TCL-06-Klik forgot password', () => {
    loginPage.clickForgotPassword()
    cy.url().should('include', 'requestPasswordResetCode')
  })

})