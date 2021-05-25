const page = require ('./page');
class checkoutFstStepPage extends page {

    //Checkout Title
    get title () { return $('span.title') }

    //buttons
    get cancelBtn () { return $('#cancel') }
    get continueBtn () { return $('#continue') }

    //Form imputs
    get formContainer () { return $('.checkout_info') }
    get firstName () { return $('#first-name') }
    get lastName () { return $('#last-name') }
    get zipCode () { return $('#postal-code') }

    // Error messages
    get errorMsgContainer () { return $('.error-message-container.error') }
    get errorMsg () { return $('[data-test="error"]') }
    //inventory path
    open () {
        return super.open('checkout-step-one.html');
    }
}
module.exports = new checkoutFstStepPage();