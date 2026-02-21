class ForgotPasswordPage {

  inputUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  clickReset() {
    cy.get('button[type="submit"]').click()
  }

}

export default ForgotPasswordPage