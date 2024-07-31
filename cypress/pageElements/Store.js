class Store {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
        storePageTitle: () => cy.getByTestId('store-page-title'),
        viewButton: () => cy.getByTestId('table-view-btn'), 
    };


}

export default new Store();