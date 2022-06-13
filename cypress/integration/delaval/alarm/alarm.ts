/// <reference types="Cypress" />
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

Given('Open page, login & choose farm', ()=>{
    cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
})

When('I wait 3000',()=>{
    cy.wait(3000)
})
Then('I click "Go to Service"', ()=>{
    cy.get('button[type="submit"]').contains("Go to Service").click()
})
Then('I click "Type"',()=>{
    cy.get('[aria-label="Type: "] > span').contains('Type').click()
})
Then('I click "Inactive"', ()=>{
    cy.get('.v-tab').eq(1).click()
})
Then('I click on Alarm Type',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Type: "]').click().click()
    cy.log('Clicked on Alarm Type sort')
})

Then('I click "Time Stamp"', ()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Time Stamp: "]').click()
    cy.log('Clicked on Time Stamp sort')
})

Then('I click "Device Name"', ()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Device Name: "]').click()
    cy.log('Clicked on Device Name sort')
})
