import Global from '../../pageElements/Global';
import Home from '../../pageElements/Home';
import Login from '../../pageElements/Login';

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