const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Verifying the inventory page elements', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should verify that the inventory page is displayed ', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(inventoryPage.title).toHaveText('PRODUCTS')
    })
    it('should verify that there are items available ', () => {
        expect(inventoryPage.backpack).toBeDisplayed
        expect(inventoryPage.backpackImg).toBeDisplayed
        expect(inventoryPage.bikeLight).toBeDisplayed
        expect(inventoryPage.bikeLightImg).toBeDisplayed
        expect(inventoryPage.onesie).toBeDisplayed
        expect(inventoryPage.onesieImg).toBeDisplayed
        browser.pause(3000)
    })
    it('should sort the products by name, from Z to A', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByNameZa.click ()
        expect(inventoryPage.firstItem).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)')
        expect(inventoryPage.secondItem).toHaveTextContaining('Sauce Labs Onesie')
        expect(inventoryPage.thirdItem).toHaveTextContaining('Sauce Labs Fleece Jacket')
        expect(inventoryPage.fourthItem).toHaveTextContaining('Sauce Labs Bolt T-Shirt')
        expect(inventoryPage.fifthItem).toHaveTextContaining('Sauce Labs Bike Light')
        expect(inventoryPage.sixthItem).toHaveTextContaining('Sauce Labs Backpack')
        browser.pause(1000)
    })
    it('should sort the products by price, from low to high', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByLowToHigh.click ()
        expect(inventoryPage.firstItem).toHaveTextContaining('Sauce Labs Onesie')
        expect(inventoryPage.secondItem).toHaveTextContaining('Sauce Labs Bike Light')
        expect(inventoryPage.thirdItem).toHaveTextContaining('Sauce Labs Bolt T-Shirt')
        expect(inventoryPage.fourthItem).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)')
        expect(inventoryPage.fifthItem).toHaveTextContaining('Sauce Labs Backpack')
        expect(inventoryPage.sixthItem).toHaveTextContaining('Sauce Labs Fleece Jacket')
        browser.pause(1000)
    })
    it('should sort the products by price, from high to low', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByHighToLow.click ()
        expect(inventoryPage.firstItem).toHaveTextContaining('Sauce Labs Fleece Jacket')
        expect(inventoryPage.secondItem).toHaveTextContaining('Sauce Labs Backpack')
        expect(inventoryPage.thirdItem).toHaveTextContaining('Sauce Labs Bolt T-Shirt')
        expect(inventoryPage.fourthItem).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)')
        expect(inventoryPage.fifthItem).toHaveTextContaining('Sauce Labs Bike Light')
        expect(inventoryPage.sixthItem).toHaveTextContaining('Sauce Labs Onesie')
        browser.pause(1000)
    })
    it('should sort the products by name, from A to Z', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByNameAz.click ()
        expect(inventoryPage.firstItem).toHaveTextContaining('Sauce Labs Backpack')
        expect(inventoryPage.secondItem).toHaveTextContaining('Sauce Labs Bike Light')
        expect(inventoryPage.thirdItem).toHaveTextContaining('Sauce Labs Bolt T-Shirt')
        expect(inventoryPage.fourthItem).toHaveTextContaining('Sauce Labs Fleece Jacket')
        expect(inventoryPage.fifthItem).toHaveTextContaining('Sauce Labs Onesie')
        expect(inventoryPage.sixthItem).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)')
        browser.pause(1000)
    })
    it('should open the required item description and verify their price', () => {
        inventoryPage.backpack.click ()
        expect(inventoryPage.itemsPrices).toHaveText('$29.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.bikeLight.click ()
        expect(inventoryPage.itemsPrices).toHaveText('$9.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.boltTShirt.click ()
        expect(inventoryPage.itemsPrices).toHaveText('$15.99')
        browser.pause(1000)
    })
});
describe('adding items to the cart and then removing them from the inventory page', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('performance_glitch_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should add the required item to the cart ', () => {
        inventoryPage.backpackAddBtn.click ()
        inventoryPage.bikeLightAddBtn.click ()
        inventoryPage.boltTShirtAddBtn.click ()
        inventoryPage.jacketAddBtn.click ()
        inventoryPage.onesieAddBtn.click ()
        inventoryPage.redTShirtAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('6')
        browser.pause(3000)
    })
    it('should remove the items from the cart ', () => {
        inventoryPage.backpackRemoveBtn.click ()
        inventoryPage.bikeLightRemoveBtn.click ()
        inventoryPage.boltTShirtRemoveBtn.click ()
        inventoryPage.jacketRemoveBtn.click ()
        inventoryPage.onesieRemoveBtn.click ()
        inventoryPage.redTShirtRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        browser.pause(3000)
    })
});
describe('adding items to the cart and then removing them, from every item description page', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('standard_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should add the required item to the cart ', () => {
        inventoryPage.backpack.click ()
        inventoryPage.backpackAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('1')
        browser.pause(1000)
        inventoryPage.backpackRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        inventoryPage.backToProducts.click ()
        inventoryPage.bikeLight.click ()
        inventoryPage.bikeLightAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('1')
        browser.pause(1000)
        inventoryPage.bikeLightRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        browser.pause(2000)
    })
});
describe('adding items to the cart and then removing them from the inventory page', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('performance_glitch_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should add the required item to the cart ', () => {
        inventoryPage.backpackAddBtn.click ()
        inventoryPage.bikeLightAddBtn.click ()
        inventoryPage.boltTShirtAddBtn.click ()
        inventoryPage.jacketAddBtn.click ()
        inventoryPage.onesieAddBtn.click ()
        inventoryPage.redTShirtAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('6')
        browser.pause(3000)
    })
    it('should remove the items from the cart ', () => {
        inventoryPage.backpackRemoveBtn.click ()
        inventoryPage.bikeLightRemoveBtn.click ()
        inventoryPage.boltTShirtRemoveBtn.click ()
        inventoryPage.jacketRemoveBtn.click ()
        inventoryPage.onesieRemoveBtn.click ()
        inventoryPage.redTShirtRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        browser.pause(3000)
    })
});
