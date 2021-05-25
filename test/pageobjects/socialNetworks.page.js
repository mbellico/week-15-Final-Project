const page = require ('./page');
class socialNetworksPage extends page {

    //Links selectors
    get btnTwitter () {return $('.social_twitter')}
    get btnFacebook () {return $('.social_facebook')}
    get btnLinkedin () {return $('.social_linkedin')}

    //login path
    open () {
        return super.open('inventory.html');
    }
}
module.exports = new socialNetworksPage();