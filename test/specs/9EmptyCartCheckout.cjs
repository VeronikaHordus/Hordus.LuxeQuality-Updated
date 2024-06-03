const LoginPage = require('../pageobjects/LoginPage.cjs');
const InventoryPage = require('../pageobjects/InventoryPage.cjs');
const CartPage = require('../pageobjects/CartPage.cjs');

describe('Empty Cart Checkout Test', () => {
    before(async () => {
        // Precondition: User is logged into the account and on the inventory page
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Verify that user is on the inventory page
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should display cart page and show error on empty cart checkout', async () => {
        // Step 1: Click on the "Cart" button at the top right corner
        await InventoryPage.openCart();

        // Expected result: Cart page is displayed
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');

        const updatedCartItems = await CartPage.cartItems;
        await expect(updatedCartItems).toBeElementsArrayOfSize(0);

        // Step 2: Click on the "Checkout" button
        await CartPage.checkout();

        // Expected result: User is still on the "Cart" page, error message "Cart is empty" is displayed
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');

        // Verify the error message is displayed
        await expect(CartPage.errorMessage).toHaveTextContaining('Cart is empty');
    });
});