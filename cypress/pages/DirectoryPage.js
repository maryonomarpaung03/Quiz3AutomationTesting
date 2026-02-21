class DirectoryPage {

  openDirectoryMenu() {
    cy.contains('Directory').click()
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').type(name)
  }

  clickSearch() {
    cy.get('button[type="submit"]').click()
  }

}

export default DirectoryPage