const LoginPage = require('../pageobjects/LoginPage.cjs');
const InventoryPage = require('../pageobjects/InventoryPage.cjs');
const MenuPage = require('../pageobjects/MenuPage.cjs');

describe('Logout Test', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should expand the menu and logout correctly', async () => {
        await MenuPage.openMenu();
        await MenuPage.getMenuItemsCount();
        await MenuPage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(LoginPage.usernameInput).toHaveValue('');
        await expect(LoginPage.passwordInput).toHaveValue('');
    });
});