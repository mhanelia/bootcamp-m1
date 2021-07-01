/// <reference types="cypress" />
let Chance = require('chance')
let chance = new Chance()

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {

      cy.server()
      cy.route({
        method: 'POST',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: {}
      }).as('postNewtable');

      cy.route({
          method: 'POST', 
          url: '**/api/1/databases/userdetails/collections/usertable?**', 
          status: 200, 
          response: {}
        }).as('postUsertable');

      cy.route({
          method: 'GET',
          url: '**/api/1/databases/userdetails/collections/newtable?**',
          status: 200,
          response: {}
        }).as('getNewtable');
        
        cy.visit('Register.html')
        cy.get('input[placeholder="First Name"]').type(chance.first())
        cy.get('input[ng-model="LastName"]').type(chance.last())
        cy.get('input[ng-model="EmailAdress"]').type(chance.email())
        cy.get('input[ng-model="Phone"]').type(chance.phone({formatted: false}))
        cy.get('input[value=Male]').check()
        cy.get('input[type=checkbox]').check('Movies')
        cy.get('input[type=checkbox]').check('Hockey')
        cy.get('select#Skills').select('Javascript')
        cy.get('select#countries').select('Brazil')
        cy.get('select#country').select('South Africa',{force: true})
        cy.get('select#yearbox').select('1985')
        cy.get('select[ng-model="monthbox"]').select('June')
        cy.get('select#daybox').select('29')
        cy.get('input#firstpassword').type('Agilizei1')
        cy.get('input#secondpassword').type('Agilizei1')
        cy.get('input#imagesrc').attachFile('imagem.png')
        cy.get('button#submitbtn').click()

        cy.wait('@postNewtable').then((resNewTable) => {
          expect(resNewTable.status).to.eq(200)
        })

        cy.wait('@postUsertable').then((resUserTable) => {
          expect(resUserTable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewTable) => {
          expect(resNewTable.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable')
        
    });
    
});








