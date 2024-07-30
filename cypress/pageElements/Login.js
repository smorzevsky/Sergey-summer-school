class Login {
    elements = {
        emailInput: () => cy.getByTestId('email-input'),
        passwordInput: () => cy.getByTestId('password-input'),
        signInButton: () => cy.getByTestId('sign-in-button'),
        welcomeText: () => cy.contains('h1', 'Welcome back'),
    };

    fillEmail(email) {
        this.elements.emailInput().clear().type(email);
    }
    fillPassword(password) {
        this.elements.passwordInput().clear().type(password);
    }


}

export default new Login();