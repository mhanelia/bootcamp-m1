/// <reference types="cypress" />

describe('Listagem', () => {
    it('Listagem sem registro', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response:'fx:webtable-get-vazio'
        })

        cy.visit('WebTable.html')

        cy.get('div[role=row]').should('have.length', 1)
        
    });
    
    it('Listagem com apenas um registro', () => {
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-unico'
        })

        cy.visit('WebTable.html')
        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', '0123456789')
      
    });
});
