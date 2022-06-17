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
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Device Name: "]').should('have.text', 'Device Name').click()
    cy.log('Clicked on Device Name sort')
})

Then('I click "Device Type"',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Device Type: "]').should('have.text', 'Device Type').click()
})

Then('I click "Code"',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Code: "]').should('have.text', 'Code').click()
})

Then('I click "Receiver"',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Receiver(s)"] > span').click()
})

Then('"Services" is visible',()=>{
    cy.get(':nth-child(3) > .nav-item').contains('Services').should('be.visible')
})

Then('"Type" is visible',()=>{
    cy.get('[aria-label="Type: "] > span').contains('Type').should('be.visible')
})

Then('"Time Stamp" is visible', ()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Time Stamp: "]').should('be.visible')
})

Then('"Device Name" is visible',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Device Name: "]').should('be.visible')
})
Then('"Device Type" is visible',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Device Type: "]').should('be.visible')
})

Then('"Code" is visible', ()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Code: "]').should('be.visible')
})

Then('"Receiver" is visible',()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > .v-data-table-header > tr > [aria-label="Receiver(s)"] > span').should('be.visible')
})

Then('I check details of alarm', ()=>{
    cy.get(':nth-child(1) > :nth-child(7) > .row > .pointer').click()
})

Then('"Back" is visible', ()=>{
    cy.get('.mr-4').contains('Back').should('be.visible')
})

Then('"Inactivate" is visible',()=>{
    cy.get('.v-btn__content').contains('Inactivate').should('be.visible')
})

Then('"Alert Received By" is visible',()=>{
    cy.get('.col-4 > .col-auto > .f6').contains('Alert Received By').siblings('div[class="row no-gutters"]').then(e =>{
        cy.log(e.text())
    })
})

Then('"Error Code" is visible',  ()=>{
    cy.get('span[class="f6 font-weight-regular text--secondary"]').siblings('p[class="text--primary"]').then((e)=>{
        cy.log("Error code: " + e.text())
    })
})

Then('"A&N Internal Dev" is visible', ()=>{
    cy.get('div span[class="dl-heading typo-body-l-bold"]').contains('A&N Internal Dev').should('be.visible')
})

Then('"Errors" is visible', ()=>{
    cy.get('.error-wrapper .alerts-title').should('have.text', "Errors").log('Errors are visible').next().then((e)=>{
        cy.log('Number of errors: ' + e.text())
    })
})

Then('"Warnings" is visible',()=>{
    cy.get('.warning-wrapper .alerts-title').should('have.text', "Warnings").log('Warnings are visible').next().then((e)=>{
        cy.log('Number of Warnings: ' + e.text())
    })
})

Then('" Go to Service " is visible', ()=>{
    cy.get('button[type="submit"]').contains(" Go to Service ").should('be.visible').log('Go to Service is visible')
})

Then('"Active" is visible', ()=>{
    cy.get('.v-tab').contains('Active').should('be.visible').log('Active is visible').then((e)=>{
        const number = e.text().split(" ")
        cy.log('Amount of Active :' + number[1])
    })
})

Then('"Inactive" is visible', ()=>{
    cy.get('.v-tab').contains('Inactive').should('be.visible').log('Inactive is visible').then((e)=>{
        const number = e.text().split(" ")
        cy.log('Amount of Inactive :' + number[1])
    })
})

Then('user verified alarm dashboard and alarm details', ()=>{
    cy.get('.alarm-notification-app').should('be.visible').log('Alarm dashboard vertified')
    cy.get(':nth-child(1) > :nth-child(7) > .row > .pointer').should('be.visible').log('Alarm details')
})

Then('I went to inactive details', ()=>{
    cy.get('.v-window-item--active > .v-data-table > .v-data-table__wrapper > table > tbody > .table-item-row > :nth-child(7)').contains('Details').should('be.visible').click()
})

Then('Activate isnt visible on inactive details',()=>{
    cy.get('div[class="row no-gutters align-center justify-end"] button').should('not.have.text', "Activate")
})

Then('I click "Back"', ()=>{
    cy.get('div[class="row no-gutters align-center justify-end"] button').contains('Back').click()
})

Then('I click "Settings"',()=>{
    cy.get('a[class="f6 text-decoration-none text--cyan"]').contains('Settings').click()
})

Then('"Alert Configuration" is visible',()=>{
    cy.get('div[class="absolute z-1 col col-3"]').contains('Alert Configuration').should('be.visible')
})

Then('Verify all the devices that are connected to the farm are listed in the Device Schedule', ()=>{
    cy.get('tr .text-start div[class="black--text font-weight-medium col col-12"]').each((e)=>{
        cy.log("Device Schedule -> devices:", e.text()+ ", ")
    }).then((e)=>{
        cy.log('Verified amout of devices: ' + e.length)
    })
})