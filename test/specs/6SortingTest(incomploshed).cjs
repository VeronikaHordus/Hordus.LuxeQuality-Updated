const LoginPage = require('../pageobjects/LoginPage.cjs');
const InventoryPage = require('../pageobjects/InventoryPage.cjs');

describe('Sorting options test', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should verify sorting by Name from A to Z', async () => {
        await InventoryPage.sortBy('Name (A to Z)');
        const productNames = await InventoryPage.getProductNames();
        const sortedNames = [...productNames].sort();
        expect(productNames).toEqual(sortedNames);
    });

    it('should verify sorting by Name from Z to A', async () => {
        await InventoryPage.sortBy('Name (Z to A)');
        const productNames = await InventoryPage.getProductNames();
        const sortedNames = [...productNames].sort().reverse();
        expect(productNames).toEqual(sortedNames);
    });

    it('should verify sorting by Price in ascending order', async () => {
        await InventoryPage.sortBy('Price (low to high)');
        const productPrices = await InventoryPage.getProductPrices();
        const sortedPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).toEqual(sortedPrices);
    });

    it('should verify sorting by Price in descending order', async () => {
        await InventoryPage.sortBy('Price (high to low)');
        const productPrices = await InventoryPage.getProductPrices();
        const sortedPrices = [...productPrices].sort((a, b) => b - a);
        expect(productPrices).toEqual(sortedPrices);
    });
});