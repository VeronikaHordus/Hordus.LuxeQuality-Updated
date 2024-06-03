const LoginPage = require('../pageobjects/LoginPage.cjs');
const InventoryPage = require('../pageobjects/InventoryPage.cjs');
const CartPage = require('../pageobjects/CartPage.cjs');
const MenuPage = require('../pageobjects/MenuPage.cjs');

describe('Saving the cart after logout', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should save the cart after logout correctly', async () => {
        await InventoryPage.addToCart('sauce-labs-backpack');
        await InventoryPage.getCartBadgeText(1);
        await MenuPage.openMenu();
        await MenuPage.getMenuItemsCount(4);
        await MenuPage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
        await expect(LoginPage.usernameInput).toHaveValue('');
        await expect(LoginPage.passwordInput).toHaveValue('');
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.cartIcon).toBeDisplayed();
        await InventoryPage.openCart();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await CartPage.getCartItemsCount(1);
        const cartItemName = await $('.inventory_item_name').getText();
        const addedProductName = await $('.inventory_item_name').getText();
        await expect(cartItemName).toBe(addedProductName);
    });
});