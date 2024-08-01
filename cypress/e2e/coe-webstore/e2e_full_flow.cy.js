import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Store from '../../pageElements/Store';
import Cart from '../../pageElements/Cart';
import Checkout from '../../pageElements/Checkout';
import Dashboard from '../../pageElements/Dashboard';
import Product_description from '../../pageElements/Product_description';


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
        Cart.elements.emptyCartMessage();
    });
        // Products into the cart can be managed
    it('already added product quantity increasion', () => {
        Home.elements.medusaCoffeMug();
        Global.elements.addToCartButton().click();
        Global.navigateSideBar.openPage('Cart');
        Cart.elements.productSelectButton().select('10');
        Global.elements.goToCheckoutButton().click();
        Global.elements.animateSpin();

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
        Checkout.elements.deliveryOptionSelectButton().should('be.visible');
        Checkout.elements.deliveryOptionSelectButton().click();
        Checkout.elements.continueToPaymentButton().click();
        Checkout.elements.continueToReviewButton().click();
        Checkout.elements.placeOrderButton().click();
        // check that order is successful with some element visible
    });
});
describe('Dashboard functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test 
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });

    it('profile information change', () => {
        Global.elements.sideBarBurger().click();
        Home.elements.accountLink().click();
        Dashboard.elements.profileLink().click();
        Dashboard.elements.nameEditButton().click();
        Dashboard.fillFirstName1(Cypress.env('firstName1'));
        Dashboard.fillLastName1(Cypress.env('lastName1'));
        Dashboard.elements.saveButton().click();
        // check element that proves save worked
    });

    it('profile information change', () => {
        Global.elements.sideBarBurger().click();
        Home.elements.accountLink().click();
        Dashboard.elements.addressLink().click();
        Dashboard.elements.addAddressButton().click();
        Dashboard.fillFirstName2(Cypress.env('firstName2'));
        Dashboard.fillLastName2(Cypress.env('lastName2'));
        Dashboard.fillAddress2(Cypress.env('address2'));
        Dashboard.fillPostalCode2(Cypress.env('postalCode2'));
        Dashboard.fillCityInput(Cypress.env('city'));
        Dashboard.elements.saveButton().click();
        // check element that proves save worked
    });

});
describe('Log out  functionality', () => {

    const USERNAME = Cypress.env('username');
    const PASSWORD = Cypress.env('password');

    beforeEach(() => {
        // Visit the store page before each test 
        cy.login(USERNAME, PASSWORD);
        cy.visit('/');
    });

    it('logs out successfully',() => {
        Global.elements.sideBarBurger().click();
        Global.elements.logOutButton().click();
        // check that user is logged out
    });
});
