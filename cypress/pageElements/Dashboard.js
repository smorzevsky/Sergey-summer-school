class Dashboard {
    elements = {
        profileLink: () => cy.getByTestId('profile-link').filter(':visible'),
        ordersLink: () => cy.getByTestId('orders-link').filter(':visible'),
        addressLink: () => cy.getByTestId('addresses-link').filter(':visible'),
        logOutButton: () => cy.getByTestId('logout-button').filter(':visible'),
        nameEditButton: () => cy.getByTestId('edit-button').eq(0),
        firstNameInput1: () => cy.getByTestId('first-name-input'),
        lastNameInput1: () => cy.getByTestId('last-name-input'),
        saveButton: () => cy.getByTestId('save-button').filter(':visible'),
        addAddressButton: () => cy.getByTestId('add-address-button').filter(':visible'),
        addressInput: () => cy.getByTestId('address-1-input'),
        postalCodeInput: () => cy.getByTestId('postal-code-input').filter(':visible'),
    
    };

    fillFirstName1(firstName){
        this.elements.firstNameInput1().clear().type(firstName);
    }
    fillLastName1(lastName){
        this.elements.lastNameInput1().clear().type(lastName);
    }
    fillFirstName2(firstName){
        this.elements.firstNameInput1().clear().type(firstName);
    }
    fillLastName2(lastName){
        this.elements.lastNameInput1().clear().type(lastName);
    }
    fillAddress2(address){
        this.elements.addressInput().clear().type(address);
    }
    fillPostalCode2(postalCode){
        this.elements.postalCodeInput().clear().type(postalCode);
    }

  
}

export default new Dashboard();