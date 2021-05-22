const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying the cart page', () => {
    beforeEach('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
})
it('should check that the buttons exist', () => {
    cartPage.cart.click ()
    expect(cartPage.continueShopping).toExist
    expect(cartPage.continueShopping).toBeClickable
    expect(cartPage.checkout).toExist
    expect(cartPage.checkout).toBeClickable
    browser.pause(1000)
    })
it('should verify that the user is in the right page', () => {
    cartPage.cart.click ()
    expect(cartPage.title).toHaveText('YOUR CART')
    expect(cartPage.cartQtyLabel).toBeDisplayed
    expect(cartPage.cartDescLabel).toBeDisplayed
    browser.pause(1000)
    })
});
describe('Testing the cart', () => {
    beforeEach('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
})
it('should verify the items on the cart', () => {
    inventoryPage.redTShirtAddBtn.click ()
    cartPage.cart.click ()
    expect(cartPage.cartQty).toHaveText('1')
    expect(cartPage.cartItem).toHaveText('Test.allTheThings() T-Shirt (Red)')
    expect(inventoryPage.itemsPrices).toHaveText('$15.99')
    browser.pause(1000)
    inventoryPage.redTShirtRemoveBtn.click()
    expect(cartPage.cartQty).not.toBeDisplayed
    browser.pause(2000)
    })
it('adding more items to the cart', () => {
    inventoryPage.boltTShirtAddBtn.click ()
    cartPage.cart.click ()
    expect(inventoryPage.boltTShirt).toHaveText('Sauce Labs Bolt T-Shirt')
    expect(inventoryPage.itemsPrices).toHaveText('$15.99')
    browser.pause(2000)
    cartPage.continueShopping.click()
    inventoryPage.onesieAddBtn.click ()
    inventoryPage.backpackAddBtn.click()
    cartPage.cart.click()
    expect(inventoryPage.onesie).toBeDisplayed
    expect(inventoryPage.backpack).toBeDisplayed
    browser.pause(2000)
    })
it('removing items from the cart', () => {
    cartPage.cart.click ()
    inventoryPage.onesieRemoveBtn.click ()
    browser.pause(3000)
    expect(inventoryPage.boltTShirt).toBeDisplayed
    expect(inventoryPage.backpack).toBeDisplayed
    expect(inventoryPage.onesie).not.toBeDisplayed
    browser.pause(2000)
    })
});
describe('Verifying the checkout process', () => {
    beforeEach('Open browser', () =>{
        browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
it('Should allow user to checkout when the cart has at least on item on it', () => {
    inventoryPage.bikeLightAddBtn.click ()
    browser.pause(2000)
    cartPage.cart.click ()
    cartPage.checkout.click()
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    browser.pause(2000)
    })
it('Should not allow user to checkout when the cart is empty', () => {
    cartPage.cart.click ()
    inventoryPage.bikeLightRemoveBtn.click ()
    cartPage.checkout.click()
    expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
    browser.pause(2000)
    //THE USER IS REDIRECTED TO THE CHECKOUT PAGE, EVE THOUGH THE CART IS EMPTY.-
    })
});