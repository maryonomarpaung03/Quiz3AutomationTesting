import LoginPage from '../../pages/loginPage'

describe('Login OrangeHRM with POM', () => {

  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.visit()
  })

  it('TC-01 Login valid', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.inputUsername(data.valid.username)
      loginPage.inputPassword(data.valid.password)
      loginPage.clickLogin()
      loginPage.verifyDashboard()
    })
  })

  it('TC-02 Password salah', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.inputUsername(data.wrongPassword.username)
      loginPage.inputPassword(data.wrongPassword.password)
      loginPage.clickLogin()
      loginPage.verifyError()
    })
  })

  it('TC-03 Username salah', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.inputUsername(data.wrongUsername.username)
      loginPage.inputPassword(data.wrongUsername.password)
      loginPage.clickLogin()
      loginPage.verifyError()
    })
  })

  it('TC-04 Username kosong', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.inputPassword(data.emptyUsername.password)
      loginPage.clickLogin()
      loginPage.verifyRequired()
    })
  })

  it('TC-05 Password kosong', () => {
    cy.fixture('loginData').then((data) => {
      loginPage.inputUsername(data.emptyPassword.username)
      loginPage.clickLogin()
      loginPage.verifyRequired()
    })
  })

})