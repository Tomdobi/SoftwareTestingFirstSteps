import { test, expect } from '@playwright/test';
import { SaucedemoBaseHelpers } from './saucedemo_helper';


test('BuyShirtCheckout', async ({ page }) => {

  const sauceDemo = new SaucedemoBaseHelpers(page);
  await sauceDemo.goto();
  await sauceDemo.userLoginSaucedemo();
  


  // Choose a Shirt and go into detail view
await page.getByText('Sauce Labs Bolt T-Shirt',{ exact: true }).click();

// Make screenshot after clicked details button
await page.screenshot({ path: './screenshots/screenshotAfterClickedDetails.png', fullPage: true });

    
    
 // Click the AddToCard button 
 await page.getByText('Add to cart',{ exact: true }).click();

 // Make screenshot after clicked AddToCart button
 await page.screenshot({ path: './screenshots/screenshotAfterAddToCart.png', fullPage: true });

    // Click the ShoppingCardItem
    await page.locator('#shopping_cart_container').click();

     // Click the Checkout button  
    await page.locator('#checkout').click();

//----------------------------------------------------------------------

// Filling the Checkout form

const locatorUserFirstName = page.locator('#first-name');
const locatorUserLastName = page.locator('#last-name');
const locatorUserPostal = page.locator('#postal-code');


 // Check FirstName inputfield to be empty 
 await expect(locatorUserFirstName).toBeEmpty();

 // Check LastName inputfield to be empty 
 await expect(locatorUserLastName).toBeEmpty();

 // Check PostalCode inputfield to be empty 
 await expect(locatorUserPostal).toBeEmpty();


 //Fill FirstName inputfield
  await page.locator('#first-name').fill('To');

 // Fill LastName inputfield
  await page.locator('#last-name').fill('Do');

 // Fill Postal inputfield
  await page.locator('#postal-code').fill('12345');

 // Make screenshot after filled checkout form
   await page.screenshot({ path: './screenshots/screenshotAfterFilledCheckoutForm.png', fullPage: true });


   await page.locator('#continue').click();
// Make screenshot after clicked continue button
await page.screenshot({ path: './screenshots/screenshotAfterClickedContinueButton.png', fullPage: true });

   await page.locator('#finish').click();

// Make screenshot after finished checkout 
await page.screenshot({ path: './screenshots/screenshotAfterFinishedCheckout.png', fullPage: true });

  });


  