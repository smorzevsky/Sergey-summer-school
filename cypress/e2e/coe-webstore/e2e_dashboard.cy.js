import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Cart from '../../pageElements/Cart';
import Checkout from '../../pageElements/Checkout';
import Store from '../../pageElements/Store';
import Dashboard from '../../pageElements/Dashboard';

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
    });

});