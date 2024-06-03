const LoginPage = require('../pageobjects/LoginPage.cjs');
const SocialMediaPage = require('../pageobjects/SocialMediaModule.cjs');

describe('Social media links Test', () => {
    before(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('should open the company Twitter page in a new tab', async () => {
        await SocialMediaPage.openSocialMedia(SocialMediaPage.twitterIcon);
        await expect(browser).toHaveUrlContaining('x.com');
        await SocialMediaPage.closeCurrentTabAndSwitchBack();
    });

    it('should open the company Facebook page in a new tab', async () => {
        await SocialMediaPage.openSocialMedia(SocialMediaPage.facebookIcon);
        await expect(browser).toHaveUrlContaining('facebook.com');
        await SocialMediaPage.closeCurrentTabAndSwitchBack();
    });

    it('should open the company LinkedIn page in a new tab', async () => {
        await SocialMediaPage.openSocialMedia(SocialMediaPage.linkedinIcon);
        await expect(browser).toHaveUrlContaining('linkedin.com');
        await SocialMediaPage.closeCurrentTabAndSwitchBack();
    });
});