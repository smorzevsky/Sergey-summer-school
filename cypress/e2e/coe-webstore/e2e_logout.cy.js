import Global from '../../pageElements/Global';

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
    });
});