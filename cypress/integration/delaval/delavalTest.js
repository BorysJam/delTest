/// <reference types="cypress" />

describe('Login & widget test', ()=>{
    it('test case',()=>{
        cy.visit(Cypress.env('url'))
        cy.get('#input-8').type(Cypress.env('email'))
        cy.get('button[type="submit"]').click()
        cy.get('#password').type(Cypress.env('pw'))
        cy.get('button[type="submit"]').contains('Log in').click()
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.get('div[class="dl-widget alerts-widget"')
        cy.get('.widget-title').should('have.text', 'Active Alerts')
        cy.get('.error-wrapper > .alerts-title > span').should('have.text', "Errors")
        cy.get('.warning-wrapper > .alerts-title > span').should('have.text', "Warnings")
        
    })
   
})