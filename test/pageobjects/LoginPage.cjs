class LoginPage {
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getUsernameFieldClass() {
        return await this.usernameInput.getAttribute('class');
    }

    async getPasswordFieldClass() {
        return await this.passwordInput.getAttribute('class');
    }

    async getErrorMessage() {
        return await this.errorMessageContainer.getText();
    }
}

module.exports = new LoginPage();