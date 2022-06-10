/// <reference types="Cypress" />
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

Given('Open page, login & choose farm', ()=>{
    cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
})

When('Check widget', ()=>{
    cy.get('div[class="dl-widget alerts-widget"')
    cy.get('.widget-title').should('have.text', 'Active Alerts')
})
Then('check for error & warning', ()=>{
    cy.get('.error-wrapper > .alerts-title > span').should('have.text', "Errors")
    cy.get('.warning-wrapper > .alerts-title > span').should('have.text', "Warnings")
})


//Alarmlist 

When('Click on Services & Alerts', ()=>{
    cy.wait(1000)
    cy.get('.nav-item .label').contains('Services').click()
    cy.get('.link div').contains('Alerts').click()
})
Then('Click on details button',()=>{
    cy.get('span[role="button"]').contains('Details').first().click()
})

//Configpage
Then('Open configuration', ()=>{
    cy.wait(1000)
    cy.get('.widget-title .icon').click()
})

//sort by alert type
Then('Sort by type', ()=>{
    cy.get('[aria-label="Type: "] > span').click()
    cy.get('[aria-label="Type: "] > span').click()
}) 

//sort by device type
Then('Sort by device', ()=>{
    cy.get('[aria-label="Device Type: "] > span').click()
    cy.get('[aria-label="Device Type: "] > span').click()
})

//sort by alarm code 
Then('Sort by alarm code', ()=>{
    cy.get('[aria-label="Code: "] > span').click()
    cy.get('[aria-label="Code: "] > span').click()
})

//assert details 
Then('Assert details', ()=>{
    cy.get('span[role="button"]').contains('Details').first().click()
    cy.get('.f5').should('not.be.empty').and('have.text', 'solstice-skunk-analects')
    cy.get('.pl-0 > :nth-child(1) > .f6').should('not.be.empty').and('have.text', 'AWS_Virtual_Edge_Server')
    cy.get('.v-dialog__content--active > .v-dialog > .pa-10 > .v-card__text > :nth-child(1) > .pl-0 > p.my-2').should('not.be.empty').and('have.text', ' Low vacuum level. Current: 0, limit: 30 solstice-skunk-analects ')
    cy.get(':nth-child(4) > .text--primary').should('not.be.empty').and('have.text', '17.108')
})