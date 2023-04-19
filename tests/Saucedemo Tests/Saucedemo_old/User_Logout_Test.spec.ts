import { test, expect } from '@playwright/test';


test('User Logout', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Kommentieren wofür
    
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

  



    //Click MenuNav and Logout
    await page.getByRole('button', { name: /Open Menu/i }).click();

     // Make screenshot of filled inputfields
     await page.screenshot({ path: './screenshots/screenshotClickLogOutButton.png', fullPage: true });
     await page.getByText('Logout').click();

   
   
    // Make screenshot after clicked Logout button
    await page.screenshot({ path: './screenshots/screenshotAfterLogout.png', fullPage: true });
    
  });