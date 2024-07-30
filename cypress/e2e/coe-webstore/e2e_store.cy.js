import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Store from '../../pageElements/Store';

describe('Store page functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test 
        cy.login(USERNAME, PASSWORD);
    });

    it('opens Store page from sidebar', () => {
        cy.visit('/store');
        Store.elements.storePageTitle().should('have.text', 'All products');
    });

    it('switch view to Table view', () => {
        cy.visit('/store');
        Store.elements.viewButton().click();

    });

    it('sort products by Price: High -> Low', () => {
        
    });

    it('sort products by Price: Low -> High', () => {

    });

    
});

