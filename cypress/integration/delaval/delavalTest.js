/// <reference types="cypress" />

describe('Login & widget test', ()=>{
    it('Login & see widget with errors & warnings',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.get('div[class="dl-widget alerts-widget"')
        cy.get('.widget-title').should('have.text', 'Active Alerts')
        cy.get('.error-wrapper > .alerts-title > span').should('have.text', "Errors")
        cy.get('.warning-wrapper > .alerts-title > span').should('have.text', "Warnings")
        
    })
    it('Login & open alarm list',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
    })
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
    it('login & go to configuration page',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.widget-title .icon').click()
    })

    it('login & sort by Type of alarm',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
        cy.get('[aria-label="Type: "] > span').click()
        cy.get('[aria-label="Type: "] > span').click()
       
    })
    it('login & sort by Device Type',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
        cy.get('[aria-label="Device Type: "] > span').click()
        cy.get('[aria-label="Device Type: "] > span').click()
      
    })
    it('login & sort by Alarm Code',()=>{
        cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
        cy.get('.farm-selector-input').click().then(()=>{
            cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
        })
        cy.wait(1000)
        cy.get('.nav-item .label').contains('Services').click()
        cy.get('.link div').contains('Alerts').click()
        cy.get('[aria-label="Code: "] > span').click()
        cy.get('[aria-label="Code: "] > span').click()
    })
   it('login & assert details', ()=>{
       cy.login(Cypress.env('email'), Cypress.env('pw'),Cypress.env('url'))
       cy.get('.farm-selector-input').click().then(()=>{
           cy.get('.dl-option-text').contains(' A&N Internal Dev ').click()
       })
       cy.wait(1000)
       cy.get('.nav-item .label').contains('Services').click()
       cy.get('.link div').contains('Alerts').click()
       cy.get('span[role="button"]').contains('Details').first().click()
       cy.get('.f5').should('not.be.empty').and('have.text', 'solstice-skunk-analects')
       cy.get('.pl-0 > :nth-child(1) > .f6').should('not.be.empty').and('have.text', 'AWS_Virtual_Edge_Server')
       cy.get('.v-dialog__content--active > .v-dialog > .pa-10 > .v-card__text > :nth-child(1) > .pl-0 > p.my-2').should('not.be.empty').and('have.text', ' Low vacuum level. Current: 0, limit: 30 solstice-skunk-analects ')
       cy.get(':nth-child(4) > .text--primary').should('not.be.empty').and('have.text', '17.108')
   })
   
   
})