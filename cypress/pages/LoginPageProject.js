class LoginPageProject {

  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  }

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  inputPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

 clickForgotPassword() {

  cy.get('input[name="username"]').should('be.visible')
  
  cy.contains('Forgot your password?')
    .should('be.visible')
    .click()

}
}

export default LoginPageProject