/// <reference types="cypress" />

describe('Login & widget test', ()=>{
  
    it('Login & open details of alert',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
        cy.get('span[role="button"]').contains('Details').first().click()
    })
  
   
   
})