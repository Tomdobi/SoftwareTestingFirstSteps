import { test, expect } from '@playwright/test';


test('Check User Login Inputfields', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Locator definition
    const locatorUserInput = page.locator('#user-name');
    const locatorUserPass = page.locator('#password');
   
    // Check usernme inputfield to be empty 
    await expect(locatorUserInput).toBeEmpty();
    // Check password inputfield to be empty 
    await expect(locatorUserPass).toBeEmpty();

  });


  test('Login As User', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');


    const locatorShoppingCartContainer = page.locator('#shopping_cart_link');


    //Fill usernme inputfield with username
    await page.getByPlaceholder('Username').fill('standard_user');

    // Fill password inputfield with password;
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Make screenshot of filled inputfields
    await page.screenshot({ path: './screenshots/screenshotFillInputfields.png', fullPage: true });

    // Click the Login button to log in 
    await page.getByRole('button').click();
   
    // Make screenshot after clicked Login button
    await page.screenshot({ path: './screenshots/screenshotAfterClickLogin.png', fullPage: true });

    await expect(page).toHaveURL(/.*inventory/);

    // Make screenshot after loged in
    await page.screenshot({ path: './screenshots/screenshotAfterLogin.png', fullPage: true });

    
  });