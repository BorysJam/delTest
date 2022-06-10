/// <reference types="cypress" />

describe('Third test', ()=>{
    it('test case',()=>{
        cy.visit(Cypress.env('url'))
        cy.get('#input-8').type(Cypress.env('email'))
        cy.get('button[type="submit"]').click()
        cy.get('#password').type(Cypress.env('pw'))
        cy.get('button[type="submit"]').contains('Log in').click()
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
        cy.get('span[role="button"]').contains('Details').first().click()
        
    })
   
})