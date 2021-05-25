const cartPage = require ('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const menuPage = require ('../pageobjects/menu.page');

describe('Verifying the menu button functionality', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
})
    it('should redirect the user to the <about> page', () => {
        menuPage.btnMenu.click ()
        browser.pause(2000)
        menuPage.btnAbout.click ()
        browser.pause(2000)
        expect(browser).toHaveUrl('https://saucelabs.com/')
        browser.pause(1000)
    })
    it('should reset the current state of the app', () => {
        inventoryPage.open ()
        inventoryPage.jacketAddBtn.click ()
        inventoryPage.onesieAddBtn.click()
        expect(cartPage.cart).toHaveText('2')
        menuPage.btnMenu.click ()
        browser.pause(2000)
        menuPage.btnResetAppState.click ()
        browser.pause(2000)
        expect(cartPage.cart).toMatch('')
        menuPage.btnClose.click()
        browser.pause(2000)
    })
    it('should direct the user back to the inventory page', () => {
        inventoryPage.jacket.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5')
        menuPage.btnMenu.click ()
        browser.pause(2000)
        menuPage.btnAllItems.click ()
        browser.pause(2000)
        expect(browser.inventoryPage).toBeDisplayed
        browser.pause(2000)
    })
    it('should log the user out', () => {
        menuPage.btnMenu.click ()
        browser.pause(2000)
        menuPage.btnLogout.click ()
        browser.pause(2000)
        expect(browser.LoginPage).toBeDisplayed
        browser.pause(3000)
    })
});