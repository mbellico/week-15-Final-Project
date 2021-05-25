const page = require ('../pageobjects/page');
class menuPage extends page {

    //login credentials selectors
    get btnMenu () {return $('#react-burger-menu-btn')}
    get btnAllItems () {return $('#inventory_sidebar_link')}
    get btnAbout () {return $('#about_sidebar_link')}
    get btnLogout () {return $('#logout_sidebar_link')}
    get btnResetAppState () {return $('#reset_sidebar_link')}
    get btnClose () {return $('#react-burger-cross-btn')}
    //login path
    open () {
        return super.open('inventory.html');
    }
}
module.exports = new menuPage();