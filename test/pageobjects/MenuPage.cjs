class MenuPage {
    get burgerButton() { return $('#react-burger-menu-btn'); }
    get logoutButton() { return $('#logout_sidebar_link'); }
    get menuItems() { return $$('.bm-item-list a'); }

    async openMenu() {
        await this.burgerButton.click();
    }

    async logout() {
        await this.logoutButton.click();
    }

    async getMenuItemsCount() {
        return (await this.menuItems).length;
    }
}

module.exports = new MenuPage();