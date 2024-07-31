import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Store from '../../pageElements/Store';
import Cart from '../../pageElements/Cart';
import Checkout from '../../pageElements/Checkout';
import Dashboard from '../../pageElements/Dashboard';

describe('login functionality', () => {
    beforeEach(() => {
        cy.visit('/');
        
    });

    it('opens a webstore login  page', () => {
        cy.contains('h1', 'Welcome back');
        // cy.get('h1').should('have.text', 'Welcome back'); <- another option
        Login.elements.emailInput('should.be', 'visible');
        Login.elements.passwordInput('should.be', 'visible');
        Login.elements.signInButton('should.be', 'visible');

    });

    it('logs in & opens Store page from sidebar', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/');
        Home.elements.headerLink().contains('Store of Excellence');
        Home.elements.productLink().should('have.length', 4);
        Global.navigateSideBar.openPage('Store');

    });

    it('opens sidebar & click on Store page', () => {
        //Global.navigateSideBar('Store');
    });
}); 

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

describe('Cart functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test 
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });
        // User can add and remove the products in the cart
    it('add a product to the cart', () => {
        Home.elements.medusaCoffeMug();
        Global.elements.addToCartButton().click();
        Global.navigateSideBar.openPage('Cart');
    });

    it('removes a product from the cart', () => {
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.productDeleteButton().click();
    });
        // Products into the card can be managed
    it('already added product quantity increasion', () => {
        Home.elements.medusaCoffeMug();
        Global.elements.addToCartButton().click();
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.productSelectButton().select('10');
        Global.elements.goToCheckoutButton().click();
    });
        // Log out with a products added in a cart 
    it('logs out with a products in the cart', () => {
        Global.elements.sideBarBurger().click();
        Global.elements.logOutButton().click();
        Login.elements.welcomeText();
    });
        // Log in, added products from the previous steps should be in a cart
    it('logs in with a products in a cart & check cart icon', () => {
        cy.login(Cypress.env('username'), Cypress.env('password'));
        cy.visit('/');
        Global.elements.cartCounterTag().should('have.text', '10');

    });
});

describe('Checkout functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test & add a product to cart before checkout
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });

    it('add to cart', () => {
        Home.elements.medusaCoffeMug();
        Global.elements.addToCartButton().click();
        Global.navigateSideBar.openPage('Cart');
    });

    it('opens a shipping address details & fills all necessary fields', () => {
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.goToCheckoutButton().click()
        //cy.getByTestId('edit-address-button').click();
        Checkout.fillFirstName(Cypress.env('firstName'));
        Checkout.fillLastName(Cypress.env('lastName'));
        Checkout.fillAddress(Cypress.env('address'));
        Checkout.fillCompany(Cypress.env('company'));
        Checkout.fillPostalCode(Cypress.env('postalCode'));
        Checkout.fillCity(Cypress.env('city'));
        Checkout.fillProvince(Cypress.env('province'));
        Checkout.elements.countrySelectButton().select('Canada');
        Checkout.elements.continueToDeliveryButton().click();

        cy.getByTestId('edit-address-button').should('be.visible');
        cy.wait(3000);
        // check that click was successful
    });

    it('chose a delivery option and finish the order', () => {
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.goToCheckoutButton().click();
        Checkout.elements.deliveryOptionSelectButton().click();
        Checkout.elements.continueToPaymentButton().click();
        Checkout.elements.continueToReviewButton().click();
        Checkout.elements.placeOrderButton().click();
        // check that order is successful
    });
});

    