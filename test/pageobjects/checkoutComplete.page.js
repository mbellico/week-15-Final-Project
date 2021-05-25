const page = require ('./page');
class checkoutCompletePage extends page {

    //Checkout Title
    get title () { return $('span.title') }

    //buttons
    get backHomeBtn () { return $('#back-to-products') }

    //Checkout confirmation container
    get container () { return $('#checkout_complete_container') }
    get image () { return $('.pony_express') }

    //inventory path
    open () {
        return super.open('checkout-complete.html');
    }
}
module.exports = new checkoutCompletePage();