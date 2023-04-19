import { test, expect } from '@playwright/test';


test('BuyShirtCheckout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
  // Locator definition
    
  const locatorUserInput = page.locator('#user-name');
  const locatorUserPass = page.locator('#password');
 
  // Check usernme inputfield to be empty 
  await expect(locatorUserInput).toBeEmpty();

  // Check password inputfield to be empty 
  await expect(locatorUserPass).toBeEmpty();

  
  //Fill usernme inputfield with username
  await page.getByPlaceholder('Username').fill('standard_user');

  // Fill password inputfield with password;
  await page.getByPlaceholder('Password').fill('secret_sauce');


  // Click the Login button to log in 
  await page.getByRole('button').click();


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


  