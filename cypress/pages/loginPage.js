class LoginPage {

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

  verifyDashboard() {
    cy.url().should('include', '/dashboard')
  }

  verifyError() {
    cy.contains('Invalid credentials').should('be.visible')
  }

  verifyRequired() {
    cy.contains('Required').should('be.visible')
  }
}

export default LoginPage