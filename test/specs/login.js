const LoginPage = require ('../pageobjects/login.page');

describe('Logging in', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        LoginPage.btnMenu.click ()
        LoginPage.btnLogout.click ()
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
        expect(LoginPage.alertWrongImput).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        browser.pause(3000)
        //'locked_out_user' does not allow user to log in.
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        LoginPage.btnMenu.click ()
        LoginPage.btnLogout.click ()
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        LoginPage.submit()
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        LoginPage.btnMenu.click ()
        LoginPage.btnLogout.click ()
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
describe('Logging in by pressing the <ENTER> key on the keypad, instead of clicking on the <LOGIN> button', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('standard_user')
        LoginPage.password.setValue('secret_sauce')
        browser.keys ('Enter')
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        LoginPage.btnMenu.click ()
        LoginPage.btnLogout.click ()
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('locked_out_user')
        LoginPage.password.setValue('secret_sauce')
        browser.keys ('Enter')
        expect(LoginPage.alertWrongImput).toBeDisplayed
        expect(LoginPage.alertWrongImput).toHaveText('Epic sadface: Sorry, this user has been locked out.')
        browser.pause(3000)
        //'locked_out_user' does not allow user to log in.
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('problem_user')
        LoginPage.password.setValue('secret_sauce')
        browser.keys ('Enter')
        expect(browser).not.toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        //'Problem User' does not allow user to log in by pressing on the Enter Key.
    })
    it('should allow user to log in when providing a valid username and a valid password', () => {
        LoginPage.username.setValue('performance_glitch_user')
        LoginPage.password.setValue('secret_sauce')
        browser.keys ('Enter')
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        browser.pause(3000)
        LoginPage.btnMenu.click ()
        LoginPage.btnLogout.click ()
    })
});