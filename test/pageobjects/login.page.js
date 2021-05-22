const page = require ('../pageobjects/page');

class LoginPage extends page {

    //login credentials selectors
    get username () { return $('#user-name') }
    get password () { return $('#password') }

    //buttons selectors
    get btnSubmit () { return $('#login-button') }
    get btnMenu () {return $('#react-burger-menu-btn')}
    get btnLogout () {return $('#logout_sidebar_link')}

    //alerts selectors
    get alertWrongImput () {return $('.error-message-container.error')}

    //login path
    open () {
        return super.open('');
    }
    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();