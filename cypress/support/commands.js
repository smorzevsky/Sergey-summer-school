import Home from "../pageElements/Home";
import Login from "../pageElements/Login";

Cypress.Commands.add('getByTestId', (id) => { 
    cy.get(`[data-testid=${id}]`);
});

Cypress.Commands.add('login', (username, password) => { 
    cy.session([username, password], () => {
    cy.visit('/');
    Login.fillEmail(username);
    Login.fillPassword(password);
    Login.elements.signInButton().click();
    Home.elements.headerLink().should('be.visible');
    })
});

