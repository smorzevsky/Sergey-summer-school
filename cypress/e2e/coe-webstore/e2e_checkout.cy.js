import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Cart from '../../pageElements/Cart';
import Checkout from '../../pageElements/Checkout';

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

    