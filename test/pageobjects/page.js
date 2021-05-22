module.exports = class page {

    open (path) {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}