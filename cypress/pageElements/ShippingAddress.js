class ShippingAddress {
    firstNameInput: () => cy.getByTestId('shipping_address.first_name'),
    lastNameInput: () => cy.getByTestId('shipping_address.last_name'),
    addressInput: () => cy.getByTestId('shipping_address.address_1'),
    companyInput: () => cy.getByTestId('shipping_address.company'),
    postalCodeInput: () => cy.getByTestId('shipping_address.postal_code'),
    cityInput: () => cy.getByTestId('shipping_address.city'),
    provinceInput: () => cy.getByTestId('shipping_address.province'),

}
fillFirstName(firstName){
    this.elements.firstNameInput().clear().type(firstName);
}
fillLastName(lastName){
    this.elements.lastNameInput().clear().type(lastName);
}
