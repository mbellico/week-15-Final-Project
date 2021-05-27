const inventoryPage = require('../pageobjects/inventory.page');
const LoginPage = require ('../pageobjects/login.page');
const menuPage = require ('../pageobjects/menu.page');

describe('Logging in', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser.getUrl()).toBe('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        menuPage.btnMenu.click ()
        menuPage.btnLogout.click ()
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(LoginPage.alertWrongImput).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        browser.pause(3000)
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        menuPage.btnMenu.click ()
        menuPage.btnLogout.click ()
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
    })
    it('session should remain active when openning a new tab after successfully logging in', () => {
        browser.newWindow('https://www.saucedemo.com/inventory.html')
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
    })
    it('session should be finish in both tabs when user logges out from one of them', () => {
        inventoryPage.open ()
        browser.newWindow('https://www.saucedemo.com/inventory.html')
        const handles = browser.getWindowHandles()
        menuPage.btnMenu.click()
        browser.pause(1000)
        menuPage.btnLogout.click()
        browser.pause(1000)
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
        browser.switchToWindow(handles[0])
        browser.pause(2000)
        browser.refresh ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/')
        browser.pause(3000)
    })
    it('session should remain active when logged user closes the window/tab, and opens a new one right after that', () => {
        inventoryPage.open ()
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        browser.pause(3000)
        browser.closeWindow ()
        browser.pause(1000)
        browser.switchWindow ('https://www.saucedemo.com/')
        inventoryPage.open ()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
    })
});
describe('Leaving empty fields', () => {
    beforeEach('Open browser', () =>{
		LoginPage.open();
    })
    it('should deny access when providing a valid username and leaving the password field empty', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when leaving both the username and the password fields empty', () => {
        LoginPage.username.setValue('')
        LoginPage.password.setValue('')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        expect(LoginPage.alertWrongImput).toHaveText('Epic sadface: Username is required')
        browser.pause(3000)
    })
    it('should deny access when providing a valid password and leaving the username field empty', () => {
        LoginPage.username.setValue('')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.username).not.toHaveText
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
});
describe('Providing invalid credentials', () => {
    beforeEach('Open browser', () =>{
		LoginPage.open();
    })
    it('should deny access when providing invalid username and password credentials', () => {
        LoginPage.username.setValue('Allegra Williams')
        LoginPage.password.setValue('alleg1234')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when providing a valid username but an invalid password', () => {
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('alleg1234')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when providing a valid password but an invalid username', () => {
        LoginPage.username.setValue('Allegra')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when provinding a valid password but a valid username with a space right before it', () => {
        LoginPage.username.setValue(' problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when provinding a valid username but a valid password with a space right before it', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue(' secret_sauce')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when provinding a valid password but a valid username with a space right after it', () => {
        LoginPage.username.setValue('problem_user ')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when provinding a valid username but a valid password with a space right after it', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce ')
        LoginPage.submit()
        expect(LoginPage.alertWrongImput).toBeDisplayed
        browser.pause(3000)
    })
});