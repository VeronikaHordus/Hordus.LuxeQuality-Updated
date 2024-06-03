const LoginPage = require('../pageobjects/LoginPage.cjs');
const InventoryPage = require('../pageobjects/InventoryPage.cjs');

describe('Login Tests', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.productList).toBeDisplayed();
        await expect(InventoryPage.cartIcon).toBeDisplayed();
    });

    it('should display error messages for invalid login credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'amazing_souce');

        const loginFieldErrorClass = await LoginPage.getUsernameFieldClass();
        await expect(loginFieldErrorClass).toContain('input_error');

        const passwordFieldErrorClass = await LoginPage.getPasswordFieldClass();
        await expect(passwordFieldErrorClass).toContain('input_error');

        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });

    it('should display error messages for invalid login credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('nonstandard_user', 'secret_souce');

        const loginFieldErrorClass = await LoginPage.getUsernameFieldClass();
        await expect(loginFieldErrorClass).toContain('input_error');

        const passwordFieldErrorClass = await LoginPage.getPasswordFieldClass();
        await expect(passwordFieldErrorClass).toContain('input_error');

        const errorMessage = await LoginPage.getErrorMessage();
        await expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
    });
});