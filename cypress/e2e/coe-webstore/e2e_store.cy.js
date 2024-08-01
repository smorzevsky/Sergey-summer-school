import Store from '../../pageElements/Store';
import Product_description from '../../pageElements/Product_description';

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
    
    it('product detail inspection', () => {
        cy.visit('/store');
        Store.elements.productLink().last().click();
        Product_description.elements.productDescription().should('have.text', `Every programmer's best friend.`);
        

    });


    it('switch view to Table view', () => {
        cy.visit('/store');
        Store.elements.viewButton().click();
        Product_description.elements.productsTablePageTitle().should('have.text', 'Products table view');

    });


    
});

