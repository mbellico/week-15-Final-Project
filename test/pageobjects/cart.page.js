const page = require ('../pageobjects/page');
class cartPage extends page {

    //Cart Titles and Subtitles
    get title () { return $('span.title') }
    get cartQtyLabel () { return $('div.cart_quantity_label') }
    get cartDescLabel () { return $('div.cart_desc_label') }

    //products in cart selectors
    get cart () { return $('a.shopping_cart_link') }
    get itemsAdded () { return $('span.shopping_cart_badge') }
    get cartQty () { return $('div.cart_quantity') }
    get cartItem() { return $('div.inventory_item_name') }
    get cartItemPrices () { return $('.inventory_item_price') }
    get cartListContainer () { return $('.cart_list') }

    //buttons
    get continueShopping () { return $('#continue-shopping') }
    get checkout () { return $('#checkout') }

    //inventory path
    open () {
        return super.open('cart.html');
    }
}
module.exports = new cartPage();