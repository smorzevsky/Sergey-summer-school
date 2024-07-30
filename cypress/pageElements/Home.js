class Home {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
        medusaCoffeMug: () => cy.getByTestId('product-wrapper').last().click({force: true}),
        
    };
 
}

export default new Home();