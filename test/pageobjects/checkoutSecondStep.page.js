const page = require ('./page');

class checkoutSecondStepPage extends page {

    //Checkout Title
    get title () { return $('span.title') }

    //buttons
    get cancelBtn () { return $('#cancel') }
    get finishBtn () { return $('#finish') }

    //Form imputs
    get confirmationForm () { return $('.summary_info') }
    get itemSubt () { return $('div.summary_subtotal_label') }
    get itemTax () { return $('div.summary_tax_label') }
    get itemTotal () { return $('div.summary_total_label') }

    //inventory path
    open () {
        return super.open('checkout-step-two.html');
    }
}

module.exports = new checkoutSecondStepPage();