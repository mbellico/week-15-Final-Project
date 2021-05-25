const checkoutFstStepPage = require('../pageobjects/checkoutFstStep.page');
const cartPage = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying the Checkout page', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        cartPage.cart.click ()
        cartPage.checkout.click()
})
    it('should verify that the user is in the right page', () => {
        expect(browser.getUrl()).toBe('https://www.saucedemo.com/checkout-step-one.html')
        expect(checkoutFstStepPage.title).toHaveText('CHECKOUT: YOUR INFORMATION')
        browser.pause(1000)
    })
    it('should check that the buttons exist', () => {
        expect(checkoutFstStepPage.cancelBtn).toExist
        expect(checkoutFstStepPage.cancelBtn).toBeClickable
        expect(checkoutFstStepPage.continueBtn).toExist
        expect(checkoutFstStepPage.continueBtn).toBeClickable
        browser.pause(1000)
    })
});
describe('Providing valid imputs', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        cartPage.cart.click ()
        cartPage.checkout.click()
})
    it('the form should be sent when providing valid imputs', () => {
        checkoutFstStepPage.firstName.setValue('John')
        checkoutFstStepPage.lastName.setValue('Smith')
        checkoutFstStepPage.zipCode.setValue('5000')
        checkoutFstStepPage.continueBtn.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        browser.pause(3000)
    })
});
describe('Leaving empty fields when filling the form', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        cartPage.cart.click ()
        cartPage.checkout.click()
})
    it('should deny sending the form when leaving every field empty', () => {
        checkoutFstStepPage.firstName.setValue('')
        checkoutFstStepPage.lastName.setValue('')
        checkoutFstStepPage.zipCode.setValue('')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        expect(checkoutFstStepPage.errorMsg).toHaveText('Error: First Name is required')
        browser.pause(3000)
    })
    it('should deny sending the form when providing a valid first name, but leaving the rest of the fields empty', () => {
        checkoutFstStepPage.firstName.setValue('Joseph')
        checkoutFstStepPage.lastName.setValue('')
        checkoutFstStepPage.zipCode.setValue('')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        expect(checkoutFstStepPage.errorMsg).toHaveText('Error: Last Name is required')
        browser.pause(3000)
    })
    it('should deny sending the form when providing a valid first name, and last name but leaving the zip code field empty', () => {
        checkoutFstStepPage.firstName.setValue('Joseph')
        checkoutFstStepPage.lastName.setValue('McKenzie')
        checkoutFstStepPage.zipCode.setValue('')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        expect(checkoutFstStepPage.errorMsg).toHaveText('Error: Postal Code is required')
        browser.pause(3000)
    })
});
describe('Providing invalid data when filling the form', () => {
    beforeEach('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        cartPage.cart.click ()
        cartPage.checkout.click()
})
    it('should deny sending the form when providing numbers for first and last name', () => {
        checkoutFstStepPage.firstName.setValue('12345')
        checkoutFstStepPage.lastName.setValue('12345')
        checkoutFstStepPage.zipCode.setValue('1250')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny sending the form when providing a valid name and last name and an invalid zip code', () => {
        checkoutFstStepPage.firstName.setValue('Joseph')
        checkoutFstStepPage.lastName.setValue('McKenzie')
        checkoutFstStepPage.zipCode.setValue('0bN7')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny sending the form when providing special characters as imputs', () => {
        checkoutFstStepPage.firstName.setValue('*-?__')
        checkoutFstStepPage.lastName.setValue('*///-+')
        checkoutFstStepPage.zipCode.setValue('*/()/-+')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny sending the form when providing valid imputs, but leaving a blank space before each of them', () => {
        checkoutFstStepPage.firstName.setValue(' Mark')
        checkoutFstStepPage.lastName.setValue(' Parson')
        checkoutFstStepPage.zipCode.setValue(' 2000')
        checkoutFstStepPage.continueBtn.click ()
        expect(checkoutFstStepPage.errorMsgContainer).toBeDisplayed
        browser.pause(3000)
    })
});