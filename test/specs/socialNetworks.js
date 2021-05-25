const socialNetworksPage = require ('../pageobjects/socialNetworks.page');
const inventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying that the links functionality', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
})
    it('should redirect the user to the SwagLabs Twitter page', () => {
        socialNetworksPage.btnTwitter.click ()
        browser.pause(2000)
        browser.switchWindow('https://twitter.com/saucelabs')
        expect(browser).toHaveUrl('https://twitter.com/saucelabs')
        browser.pause(1000)
    })
    it('should redirect the user to the SwagLabs Facebook page', () => {
        inventoryPage.open()
        socialNetworksPage.btnFacebook.click ()
        browser.pause(2000)
        browser.switchWindow('https://www.facebook.com/saucelabs')
        expect(browser).toHaveUrl('https://www.facebook.com/saucelabs')
        browser.pause(1000)
    })
    it('should redirect the user to the SwagLabs Linkedin page', () => {
        inventoryPage.open()
        socialNetworksPage.btnLinkedin.click ()
        browser.pause(2000)
        browser.switchWindow('https://www.linkedin.com')
        expect(browser).not.toHaveUrl('https://www.linkedin.com/company/sauce-labs/')
        expect(browser).toHaveUrlContaining('https://www.linkedin.com')
        browser.pause(1000)
    })
});
