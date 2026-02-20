describe('TS-LOGIN - Proses Login OrangeHRM', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

  // TC-LOG-001
  it('TC-LOG-001 Login dengan Username dan password valid', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  // TC-LOG-002
  it('TC-LOG-002 Login dengan password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('salah123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC-LOG-003
  it('TC-LOG-003 Login dengan username salah', () => {
    cy.get('input[name="username"]').type('Admin123')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC-LOG-004
  it('TC-LOG-004 Field username kosong', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // TC-LOG-005
  it('TC-LOG-005 Field password kosong', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // TC-LOG-006
  it('TC-LOG-006 Username dan password kosong', () => {
    cy.get('button[type="submit"]').click()
    cy.contains('Required').should('be.visible')
  })

  // TC-LOG-007
  it('TC-LOG-007 Verifikasi pesan error Invalid credentials', () => {
    cy.get('input[name="username"]').type('Admin123')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  // TC-LOG-008
  it('TC-LOG-008 Link Forgot your password', () => {
    cy.contains('Forgot your password?').click()
    cy.url().should('include', 'requestPasswordResetCode')
  })

  // TC-LOG-009
  it('TC-LOG-009 Masking karakter password', () => {
    cy.get('input[name="password"]').should('have.attr', 'type', 'password')
  })

  // TC-LOGIN-010 (LinkedIn)
  it('TC-LOGIN-010 Klik logo LinkedIn', () => {
    cy.get('a[href*="linkedin"]').should('have.attr', 'target', '_blank')
  })

  // TC-LOGIN-011 (Facebook)
  it('TC-LOGIN-011 Klik logo Facebook', () => {
    cy.get('a[href*="facebook"]').should('have.attr', 'target', '_blank')
  })

  // TC-LOGIN-012 (Twitter/X)
  it('TC-LOGIN-012 Klik logo Twitter/X', () => {
    cy.get('a[href*="twitter"]').should('have.attr', 'target', '_blank')
  })

  // TC-LOGIN-013 (YouTube)
  it('TC-LOGIN-013 Klik logo YouTube', () => {
    cy.get('a[href*="youtube"]').should('have.attr', 'target', '_blank')
  })

  // TC-LOGIN-014
  it('TC-LOGIN-014 Link media sosial membuka tab baru', () => {
    cy.get('a[target="_blank"]').should('exist')
  })

})
