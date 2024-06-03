class CartPage {
    get cartItems() { return $$('.cart_item'); }
    get checkoutButton() { return $('#checkout'); }
    get errorMessageContainer() { return $('.error-message-container'); }

    async getCartItemsCount() {
        return (await this.cartItems).length;
    }

    async getCartItemName(index) {
        const item = await this.cartItems[index];
        return await item.$('.inventory_item_name').getText();
    }
    
    async checkout() {
        await this.checkoutButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessageContainer.getText();
    }
}

module.exports = new CartPage();