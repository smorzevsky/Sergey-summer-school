class Product_description {
    elements = {

        productDescription: () => cy.getByTestId('product-description'),
        productsTablePageTitle: () => cy.getByTestId('table-page-title'),
    
    };
 
}

export default new Product_description();