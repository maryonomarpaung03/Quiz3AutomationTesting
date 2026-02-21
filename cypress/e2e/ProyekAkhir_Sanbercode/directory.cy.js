
import DirectoryPage from '../../pages/DirectoryPage'
import LoginPageProject from '../../pages/LoginPageProject'

const login = new LoginPageProject()
const directory = new DirectoryPage()

describe('Directory Page Test', () => {

  beforeEach(() => {

  login.visit()
  login.inputUsername('Admin')
  login.inputPassword('admin123')
  login.clickLogin()

  cy.url().should('include', 'dashboard')

  cy.contains('Directory').click()

  cy.url().should('include', 'directory')

})

  it('TCD-01-Buka menu directory', () => {
  cy.contains('Directory').click()
  cy.url().should('include', 'directory')

})

it('TCD-02-Search employee valid', () => {

  cy.contains('Directory').click()
  cy.url().should('include', 'directory')
  cy.get('input[placeholder="Type for hints..."]')
    .type('Ranga')

  cy.contains('Search').click()
  cy.contains('Ranga Akunuri')
    .should('be.visible')

})

 it('TCD-03-Search employee kosong', () => {
  cy.contains('Search').click()
  cy.url().should('include', 'directory')
})

  it('TCD-04-Verifikasi field search tampil', () => {
  cy.get('input[placeholder="Type for hints..."]')
    .should('be.visible')
})
  it('TCD-05-Verifikasi tombol search aktif', () => {
  cy.contains('button', 'Search')
    .should('be.enabled')
})

  it('TCD-06-Refresh halaman directory', () => {

  cy.reload()
  cy.url().should('include', 'directory')
  cy.get('input[placeholder="Type for hints..."]')
    .should('be.visible')

})

})