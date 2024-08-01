class Checkout {

    elements = {
        firstNameInput: () => cy.getByTestId('shipping-first-name-input'),
        lastNameInput: () => cy.getByTestId('shipping-last-name-input'),
        addressInput: () => cy.getByTestId('shipping-address-input'),
        companyInput: () => cy.getByTestId('shipping-company-input'),
        postalCodeInput: () => cy.getByTestId('shipping-postal-code-input'),
        cityInput: () => cy.getByTestId('shipping-city-input'),
        provinceInput: () => cy.getByTestId('shipping-province-input'),
        continueToDeliveryButton: () => cy.getByTestId('submit-address-button'),
        countrySelectButton: () => cy.getByTestId('shipping-country-select'),
        deliveryOptionSelectButton: () => cy.getByTestId('delivery-option-radio').contains('FakeEx Express'),
        continueToPaymentButton: () => cy.getByTestId('submit-delivery-option-button'),
        continueToReviewButton: () => cy.getByTestId('submit-payment-button'),
        placeOrderButton: () => cy.getByTestId('submit-order-button'),
        
    }

    fillFirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName);
    }
    fillLastName(lastName){
        this.elements.lastNameInput().clear().type(lastName);
    }
    fillAddress(address){
        this.elements.addressInput().clear().type(address);
    }
    fillCompany(company){
        this.elements.companyInput().clear().type(company);
    }
    fillPostalCode(postalCode){
        this.elements.postalCodeInput().clear().type(postalCode);
    }
    fillCity(city){
        this.elements.cityInput().clear().type(city);
    }
    fillProvince(province){
        this.elements.provinceInput().clear().type(province);
    }
}

export default new Checkout();

