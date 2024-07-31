class Dashboard {
    elements = {
        profileLink: () => cy.getByTestId('profile-link').filter(':visible'),
        ordersLink: () => cy.getByTestId('orders-link').filter(':visible'),
        addressLink: () => cy.getByTestId('address-link').filter(':visible'),
        logOutButton: () => cy.getByTestId('logout-button').filter(':visible'),
        nameEditButton: () => cy.getByTestId('edit-button').eq(0),
        firstNameInput1: () => cy.getByTestId('first-name-input'),
        lastNameInput1: () => cy.getByTestId('last-name-input'),
        saveButton: () => cy.getByTestId('save-button').filter(':visible'),
    
    };

    fillFirstName1(firstName){
        this.elements.firstNameInput1().clear().type(firstName);
    }
    fillLastName1(lastName){
        this.elements.lastNameInput1().clear().type(lastName);
    }
  
}

export default new Dashboard();