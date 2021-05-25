const checkoutSecondStepPage = require('../pageobjects/checkoutSecondStep.page');
const checkoutFstStepPage = require('../pageobjects/checkoutFstStep.page');
const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying the Checkout overview page', () => {
    beforeAll('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
        inventoryPage.backpackAddBtn.click()
        inventoryPage.bikeLightAddBtn.click()
        inventoryPage.boltTShirtAddBtn.click()
        cartPage.cart.click ()
        cartPage.checkout.click()
        checkoutFstStepPage.firstName.setValue('John')
        checkoutFstStepPage.lastName.setValue('Smith')
        checkoutFstStepPage.zipCode.setValue('5000')
        checkoutFstStepPage.continueBtn.click ()
})
    it('should verify that the user is in the right page', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        expect(checkoutFstStepPage.title).toHaveText('CHECKOUT: OVERVIEW')
        browser.pause(1000)
    })
    it('should check that the buttons exist', () => {
        expect(checkoutSecondStepPage.cancelBtn).toExist
        expect(checkoutSecondStepPage.cancelBtn).toBeClickable
        expect(checkoutSecondStepPage.finishBtn).toExist
        expect(checkoutSecondStepPage.finishBtn).toBeClickable
        browser.pause(1000)
    })
    it('should check that the products selected to be sent to the cart are properly detailed in the form', () => {
        expect(checkoutSecondStepPage.confirmationItemsForm).toHaveTextContaining(['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'])
        browser.pause(1000)
    })
    it('the numbers displayed for subtotal and total should be accurate', () => {
        expect(checkoutSecondStepPage.itemSubt).toHaveTextContaining('$55.97')
        expect(checkoutSecondStepPage.itemTax).toHaveTextContaining('$4.48')
        expect(checkoutSecondStepPage.itemTotal).toHaveTextContaining('$60.45')
        browser.pause(3000)
    })
    it('when user clicks on the <cancel> button, the transaction should be cancelled, and the items on the cart removed ', () => {
        checkoutSecondStepPage.open ()
        checkoutSecondStepPage.cancelBtn.click()
        expect(browser).not.toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        expect(cartPage.itemsAdded).toHaveText('3')
        browser.pause(3000)
    })
    it('when user clicks on the <finish> button, should be directed to the purchase confirmation page', () => {
        checkoutSecondStepPage.open ()
        checkoutSecondStepPage.finishBtn.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        browser.pause(2000)
    })
});