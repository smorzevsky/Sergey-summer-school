class Cart {
    elements = {
        headerLink: () => cy.getByTestId('nav-store-link'),
        productLink: () => cy.getByTestId('product-wrapper'),
        productDeleteButton: () => cy.get('.w-28 > .text-small-regular > .flex'),
        productSelectButton: () => cy.getByTestId('product-select-button'),
        goToCheckoutButton: () => cy.getByTestId('checkout-button'),
    };
 
}

export default new Cart();