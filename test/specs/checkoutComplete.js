const checkoutComplete = require('../pageobjects/checkoutComplete.page');
const checkoutSecondStepPage = require('../pageobjects/checkoutSecondStep.page');
const checkoutFstStepPage = require('../pageobjects/checkoutFstStep.page');
const cartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying the Checkout Complete page', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        cartPage.cart.click ()
        cartPage.checkout.click()
        checkoutFstStepPage.firstName.setValue('John')
        checkoutFstStepPage.lastName.setValue('Smith')
        checkoutFstStepPage.zipCode.setValue('5000')
        checkoutFstStepPage.continueBtn.click ()
        checkoutSecondStepPage.finishBtn.click()
})
    it('should verify that the user is in the right page', () => {
        expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-complete.html')
        expect(checkoutComplete.title).toHaveText('CHECKOUT: COMPLETE!')
        browser.pause(1000)
    })
    it('should check the content on the page', () => {
        expect(checkoutComplete.container).toHaveTextContaining('THANK YOU FOR YOUR ORDER')
        expect(checkoutComplete.image).toBeDispalyed
        expect(cartPage.cartQty).toMatch('')
        browser.pause(1000)
    })
    it('should check the buttons funtionality', () => {
        checkoutComplete.backHomeBtn.click()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(1000)
    })
});