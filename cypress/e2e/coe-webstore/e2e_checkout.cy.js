import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Store from '../../pageElements/Store';
import Cart from '../../pageElements/Cart';

describe('Checkout functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test & add a product to cart before checkout
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });

    it('proceed to checkout', () => {
        Home.elements.medusaCoffeMug();
        Global.elements.addToCartButton().click();
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.goToCheckoutButton().click();
    });
    
});

    