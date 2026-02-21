
import ForgotPasswordPage from '../../pages/ForgotPasswordPage'
import LoginPageProject from '../../pages/LoginPageProject'

const login = new LoginPageProject()
const forgot = new ForgotPasswordPage()

describe('Forgot Password Page Test', () => {

  beforeEach(() => {
  login.visit()
})

 it('TCFP-01-Navigasi ke halaman Forgot Password', () => {

  login.clickForgotPassword()

  cy.url().should('include', 'requestPasswordResetCode')

})


  it('TCFP-02-Username kosong', () => {
    forgot.clickReset()
    cy.contains('Required').should('be.visible')
  })

 it('TCFP-03-Kembali ke login', () => {
  login.clickForgotPassword()
  cy.url().should('include', 'requestPasswordResetCode')
  cy.contains('Cancel').click()
  cy.url().should('include', 'login')
})

  it('TCFP-04-Input username tidak valid', () => {

  login.clickForgotPassword()
  cy.url().should('include', 'requestPasswordResetCode')
  forgot.inputUsername('randomuser')
  forgot.clickReset()
  cy.contains('Reset Password link sent').should('be.visible')

})

  it('TCFP-05-Verifikasi field username ada', () => {
    cy.get('input[name="username"]').should('be.visible')
  })

  it('TCFP-06-Verifikasi tombol reset aktif', () => {
    cy.get('button[type="submit"]').should('be.enabled')
  })

})