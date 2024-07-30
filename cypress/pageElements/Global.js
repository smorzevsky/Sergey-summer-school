class Global {
    elements = {
        sideBarBurger: () => cy.getByTestId('nav-menu-button'), 
        sideBarLinks: (pageName) => cy.getByTestId('nav-menu-popup')
        .contains('a', pageName),
        addToCartButton: () => cy.getByTestId('add-product-button'),
        goToCheckoutButton: () => cy.getByTestId('checkout-button'),
        logOutButton: () => cy.getByTestId('logout-button'),
        cartCounterTag: () => cy.get('.bg-ui-tag-blue-bg'),
    
    }; 

    navigateSideBar = {
        openPage: (pageName) => { 
            this.elements.sideBarBurger().click();
            this.elements.sideBarLinks(pageName).click(); 
        },
    };



}

export default new Global();
