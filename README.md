# Description: 

This repository includes automation tests for Swag Labs web application (https://www.saucedemo.com/). 
Playwright testing framework and JavaScript language was used to write tests. 
Test scenario cover the functionality of logging in, checking the displaying of necessary items on the page, adding and removing items from the cart.
The test code has been added to a 'login-add-to-cart.spec.js' file in the 'tests' folder.


# Using and running tests:

1. Make sure that the required dependencies are installed:

"@playwright/test": "^1.40.1"
"@types/node": "^20.10.3"

2. To run tests use commands:

 'npx playwright test login-add-to-cart.spec.js'
 'npx playwright test login-add-to-cart.spec.js --ui' (to use Playwright UI mode)


 # 'Perform login to the Swag Labs resource' - hook, that is executed before each test:

Redirect to the Swag Labs web application (https://www.saucedemo.com/)
Performs login with valid credentials
Checks that after logging in we are on the correct page (https://www.saucedemo.com/inventory.html)

# 'Verify needed items on the Products page' test:

Verify that 'Products' title is displayed
Verify that 'Shopping Cart' icon is displayed
Verify that more than 1 product is displayed on the page

# 'Adding and removing product from the cart' test:

Add the first product to the cart by clicking Add to Cart button
Verify that 'Shopping Cart' icon contains the number of products added
Open the Shopping Cart and verify the added product is displayed
Removes the product
Verify no products are available in the Shopping Cart