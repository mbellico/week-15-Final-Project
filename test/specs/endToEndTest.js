const checkoutCompletePage = require('../pageobjects/checkoutComplete.page');
const checkoutSecondStepPage = require('../pageobjects/checkoutSecondStep.page');
const checkoutFstStepPage = require('../pageobjects/checkoutFstStep.page');
const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const menuPage = require('../pageobjects/menu.page');

describe('Verifying the inventory page elements', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should open the required item description and verify their description and price', () => {
        inventoryPage.jacket.click ()
        expect(inventoryPage.detailsContainer).toHaveTextContaining('Sauce Labs Fleece Jacket')
        expect(inventoryPage.itemsPrices).toHaveText('$49.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.bikeLight.click ()
        expect(inventoryPage.detailsContainer).toHaveTextContaining('Sauce Labs Bike Light')
        expect(inventoryPage.itemsPrices).toHaveText('$9.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.redTShirt.click ()
        expect(inventoryPage.detailsContainer).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)')
        expect(inventoryPage.itemsPrices).toHaveText('$15.99')
        menuPage.btnMenu.click ()
        browser.pause(1000)
        menuPage.btnAllItems.click ()
        browser.pause(1000)
    })
    it('should send the selected items to the cart', () => {
        inventoryPage.jacketAddBtn.click ()
        browser.pause(1000)
        inventoryPage.bikeLightAddBtn.click ()
        browser.pause(1000)
        inventoryPage.redTShirtAddBtn.click ()
        browser.pause(1000)
        expect(cartPage.itemsAdded).toHaveText('3')
        browser.pause(2000)
    })
    it('should check the items on the cart', () => {
        cartPage.cart.click ()
        expect(cartPage.cartListContainer).toHaveTextContaining(['Sauce Labs Fleece Jacket', 'Sauce Labs Bike Light', 'Test.allTheThings() T-Shirt (Red)'])
        cartPage.checkout.click ()
        browser.pause(2000)
    })
    it('should fill in the checkout forms, and check the total amount to pay ', () => {
        checkoutFstStepPage.firstName.setValue('John')
        checkoutFstStepPage.lastName.setValue('Smith')
        checkoutFstStepPage.zipCode.setValue('5000')
        checkoutFstStepPage.continueBtn.click ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        browser.pause(3000)
        expect(checkoutSecondStepPage.itemSubt).toHaveTextContaining('$75.97')
        })
    it('should modify the cart content and complete the purchasing process ', () => {
        checkoutSecondStepPage.cancelBtn.click ()
        inventoryPage.jacketRemoveBtn.click ()
        browser.pause(1000)
        cartPage.cart.click ()
        expect(cartPage.cartListContainer).toHaveTextContaining(['Sauce Labs Bike Light', 'Test.allTheThings() T-Shirt (Red)'])
        cartPage.checkout.click ()
        browser.pause(1000)
        checkoutFstStepPage.firstName.setValue('John')
        checkoutFstStepPage.lastName.setValue('Smith')
        checkoutFstStepPage.zipCode.setValue('5000')
        checkoutFstStepPage.continueBtn.click ()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        browser.pause(3000)
        expect(checkoutSecondStepPage.itemSubt).toHaveTextContaining('$25.98')
        browser.pause(1000)
        checkoutSecondStepPage.finishBtn.click ()
        expect(checkoutCompletePage.container).toHaveTextContaining('THANK YOU FOR YOUR ORDER')
        browser.pause(2000)
        menuPage.btnMenu.click ()
        menuPage.btnLogout.click ()
        browser.pause (2000)
        expect(browser.getUrl()).toBe('https://www.saucedemo.com/')
    })
});