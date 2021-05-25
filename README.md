# "Become a QA Automation week 15 - Final Project"

## What is the Project about?
Using WebDriver IO to design automated tests for every module that the following website (e-commerce) contains: [SwagLabs](https://www.saucedemo.com/).

## Author: 
Melisa D. Bellico 

## Technology stack
* Node.js (to visit Node.js documentation, please access the following link: [Node.js/docs](https://nodejs.org/es/docs/) )
* WebDriver IO for automated testing (to visit WebDriverIO documentation, please access the following link: [WebDriverIO/docs](https://webdriver.io/docs/gettingstarted))
* Google chrome is preferred.-
* Visual Studio Code or any other code editor is required.-

## How to install?  (you should use the following commands, either on the git or on the VS console)
* $ npm install
* $ npm init to create a package.Json
* $npm install @wdio/cli
* $npx wdio config

    *The package.Json should contain the following script:*

      "scripts": {
        "test": "npx wdio run ./wdio.conf.js"
      },

## About the tests performed: some bugs were detected.

**Login Page**

1. 'locked_out_user' does not allow user to log in (The user is blocked)
2. 'problem_user' does allow the user to login. However, the content displayed on the page when logging in with this credential, is not the correct one. (The items images, for instance, are wrong).

**Cart Page**

1. The user is redirected to the 'checkout' page after pressing the 'checkout' button, even though the cart is empty.

**Checkout first step page**

1. The checkout form is sent when clicking on the 'Continue' button, even though invalid inputs are provided for name, last name and zip code. No error message is shown, although the user provides numbers or special characters for inputs. When a blank space is left right before the name or last name provided, the form is also successfully sent.

**Checkout second step page**

1. When the user clicks on the 'cancel' button, the purchase/transaction should be cancelled, and the items errased from the cart. However, the cart remains full. (This is not a bug, but a suggestion)

**Social Networks Links**

1. When clicking on the Linkedin icon, the user is redirected lo the Linkedin site and asked to register in case they don't already have an account, or login if otherwise. However, the SwagLabs Linkedin page should be displayed instead. 
