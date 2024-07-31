import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';
import Cart from '../../pageElements/Cart';

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
