class Home {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
        accountLink: () => cy.getByTestId('nav-account-link'),
        medusaCoffeMug: () => cy.getByTestId('product-wrapper').last().click({force: true}),
        
    };
 
}

export default new Home();