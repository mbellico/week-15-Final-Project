const page = require ('../pageobjects/page');

class inventoryPage extends page {

    //Page Title
    get title () { return $('span.title') }

    //products selectors for: standard_user and performance_glitch_user
    get backpack () { return $('#item_4_title_link') }
    get bikeLight () { return $('#item_0_title_link') }
    get boltTShirt () { return $('#item_1_title_link') }
    get jacket () { return $('#item_5_title_link') }
    get onesie () { return $('#item_2_title_link') }
    get redTShirt () { return $('#item_3_title_link') }

    //products selectors for: problem_user
    get jacketProblemUs () { return $('#item_4_title_link') }
    get onesieProblemUs () { return $('#item_1_title_link') }
    get redTShirtProblemUs () { return $('#item_2_title_link') }

    //products images selectors
    get backpackImg () { return $('#item_4_img_link') }
    get bikeLightImg () { return $('#item_0_img_link') }
    get boltTShirtImg () { return $('#item_1_img_link') }
    get jacketImg () { return $('#item_5_img_link') }
    get onesieImg () { return $('#item_2_img_link') }
    get redTShirtImg () { return $('#item_3_img_link') }


    //'sort by' selectors
    get sortByBtn () { return $('.product_sort_container') }
    get sortByNameAz () { return $('span > select > option:nth-child(1)') }
    get sortByNameZa() { return $('span > select > option:nth-child(2)') }
    get sortByLowToHigh () { return $('span > select > option:nth-child(3)') }
    get sortByHighToLow () { return $('span > select > option:nth-child(4)') }

    //add to cart add button selectors
    get backpackAddBtn () { return $('#add-to-cart-sauce-labs-backpack') }
    get bikeLightAddBtn () { return $('#add-to-cart-sauce-labs-bike-light') }
    get boltTShirtAddBtn () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get jacketAddBtn () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get onesieAddBtn () { return $('#add-to-cart-sauce-labs-onesie') }
    get redTShirtAddBtn () { return $('[name="add-to-cart-test.allthethings()-t-shirt-(red)"]') }

    //remove from cart button selectors
    get backpackRemoveBtn () { return $('#remove-sauce-labs-backpack') }
    get bikeLightRemoveBtn () { return $('#remove-sauce-labs-bike-light') }
    get boltTShirtRemoveBtn () { return $('#remove-sauce-labs-bolt-t-shirt') }
    get jacketRemoveBtn () { return $('#remove-sauce-labs-fleece-jacket') }
    get onesieRemoveBtn () { return $('#remove-sauce-labs-onesie') }
    get redTShirtRemoveBtn () { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') }

    //Prices selectors
    get itemsPrices () { return $('div.inventory_item_price') }

    //buttons
    get backToProducts () { return $('#back-to-products') }

    //inventory path
    open () {
        return super.open('inventory.html');
    }
}

module.exports = new inventoryPage();