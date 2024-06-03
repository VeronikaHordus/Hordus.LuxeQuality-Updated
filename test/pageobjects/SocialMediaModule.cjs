class SocialMediaPage {
    get twitterIcon() { return $('.social_twitter'); }
    get facebookIcon() { return $('.social_facebook'); }
    get linkedinIcon() { return $('.social_linkedin'); }

    async openSocialMedia(linkIcon) {
        await linkIcon.click();
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
    }

    async closeCurrentTabAndSwitchBack() {
        const handles = await browser.getWindowHandles();
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
}

module.exports = new SocialMediaPage();