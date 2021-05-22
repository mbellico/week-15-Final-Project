const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require ('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

//TESTING THE INVENTORY PAGE AFTER LOGGING IN AS "STANDARD_USER" AND "PERFORMANCE_GLITCH_USER".-
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
        expect(inventoryPage.boltTShirt).toBeDisplayed
        expect(inventoryPage.boltTShirtImg).toBeDisplayed
        expect(inventoryPage.jacket).toBeDisplayed
        expect(inventoryPage.jacketImg).toBeDisplayed
        expect(inventoryPage.onesie).toBeDisplayed
        expect(inventoryPage.onesieImg).toBeDisplayed
        expect(inventoryPage.redTShirt).toBeDisplayed
        expect(inventoryPage.redTShirtImg).toBeDisplayed
        browser.pause(3000)
    })
    it('should sort the products by name or price,  ', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByNameAz.click ()
        expect(inventoryPage.sortByNameAz).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByNameZa.click ()
        expect(inventoryPage.sortByNameZa).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByLowToHigh.click ()
        expect(inventoryPage.sortByLowToHigh).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByHighToLow.click ()
        expect(inventoryPage.sortByHighToLow).toBeDisplayed
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
        inventoryPage.jacketProblemUs.click ()
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
// QUEDÉ ACAAA ... TESTEAR TODO PROBLEM USER
//TESTING THE INVENTORY PAGE AFTER LOGGING IN AS "PROBLEM_USER".-
describe('Verifying the inventory page elements', () => {
    beforeEach('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('problem_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should verify that the inventory page is displayed ', () => {
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(inventoryPage.title).toHaveText('PRODUCTS')
    })
    it('should verify the items availability ', () => {
        inventoryPage.jacketProblemUs.click()
        expect(inventoryPage.itemsPrices).toHaveText('$49.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.onesieProblemUs.click ()
        expect(inventoryPage.itemsPrices).toHaveText('$7.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        inventoryPage.redTShirtProblemUs.click ()

        expect(inventoryPage.itemsPrices).toHaveText('$15.99')
        browser.pause(1000)
        inventoryPage.backToProducts.click ()
        browser.pause(3000)
    })
    it('should sort the products by name or price,  ', () => {
        inventoryPage.sortByBtn.click ()
        inventoryPage.sortByNameAz.click ()
        expect(inventoryPage.sortByNameAz).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByNameZa.click ()
        expect(inventoryPage.sortByNameZa).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByLowToHigh.click ()
        expect(inventoryPage.sortByLowToHigh).toBeDisplayed
        browser.pause(1000)
        inventoryPage.sortByHighToLow.click ()
        expect(inventoryPage.sortByHighToLow).toBeDisplayed
        browser.pause(1000)
    })
});
describe('adding items to the cart and then removing them from the inventory page', () => {
    beforeAll('Open browser', () =>{
		browser.url('https://www.saucedemo.com');
        LoginPage.username.setValue ('problem_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should add the required item to the cart ', () => {
        inventoryPage.jacketAddBtn.click ()
        inventoryPage.onesieAddBtn.click ()
        inventoryPage.redTShirtAddBtn.click ()
        expect(cartPage.itemsAdded).toMatch('3')
        browser.pause(3000)
    })
    it('should remove the items from the cart ', () => {
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
        LoginPage.username.setValue ('problem_user')
        LoginPage.password.setValue ('secret_sauce')
        LoginPage.submit ()
    })
    it('should add the required item to the cart ', () => {
        inventoryPage.jacketProblemUs.click ()
        inventoryPage.jacketkAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('1')
        browser.pause(1000)
        inventoryPage.jacketRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        inventoryPage.backToProducts.click ()
        inventoryPage.onesieProblemUs.click ()
        inventoryPage.onesieAddBtn.click ()
        expect(cartPage.itemsAdded).toHaveText('1')
        browser.pause(1000)
        inventoryPage.onesieRemoveBtn.click ()
        expect(cartPage.itemsAdded).toMatch('')
        browser.pause(2000)
    })
});
