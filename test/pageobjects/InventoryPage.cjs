class InventoryPage {
    get productList() { return $('.inventory_list'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    get sortingDropdown() { return $('.product_sort_container'); }

    async addToCart(productName) {
        const productButton = await $(`#add-to-cart-${productName}`);
        await productButton.click();
    }

    async getCartBadgeText() {
        return await this.cartIcon.getText();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async sortBy(option) {
        await this.sortingDropdown.selectByVisibleText(option);
    }

    async getProductNames() {
        const elements = await this.inventoryItems;
        return Promise.all(elements.map(async item => {
            return item.$('.inventory_item_name').getText();
        }));
    }

    async getProductPrices() {
        const elements = await this.inventoryItems;
        return Promise.all(elements.map(async item => {
            const priceText = await item.$('.inventory_item_price').getText();
            return parseFloat(priceText.replace('$', ''));
        }));
    }
}

module.exports = new InventoryPage();