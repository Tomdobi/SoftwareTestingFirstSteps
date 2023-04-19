import { test, expect } from '@playwright/test';

test('UserName Attribute', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a field "to be" a text.
  const locator = page.locator('#user-name');
  const locator2 = page.locator('#password');
 // await expect(locator).not.toBeVisible();
  await expect(locator).toBeVisible();
  await expect(locator).toHaveAttribute('type', 'text');
  await expect(locator).toHaveAttribute('placeholder', 'Username');
});

test('Pass Attribute', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Expect a field "to be" a text.
    
    const locator2 = page.locator('#password');
   // await expect(locator).not.toBeVisible();
    await expect(locator2).toBeVisible();
    await expect(locator2).toHaveAttribute('type', 'password');
   // await expect(locator2).toHaveAttribute('placeholder', 'Ubername');
    

  
  });

  test('User Input Exists', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  
    // Kommentieren wofür
    
    const locatorUserInput = page.locator('#user-name');
    const locatorUserPass = page.locator('#password');
   
    // Await Usernme inputfield to be empty 
    await expect(locatorUserInput).toBeEmpty();
    
    //Fill with username
    await page.getByPlaceholder('Username').fill('standard_user');

    // Await password inputfield to be empty 
    await expect(locatorUserPass).toBeEmpty();

    // Fill with password;
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Make screenshot

    await page.screenshot({ path: 'screenshotFillLogin.png', fullPage: true });

    // Click the Login button to log in 
    await page.getByRole('button').click();


      //Click MenuNav and Logout - funktioniert
      await page.getByRole('button', { name: /Open Menu/i }).click();
      await page.getByText('Logout').click();
   
    
  });



/*

  test('Menu Exists', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Click MenuNav and Logou
    await page.getByRole('button', { name: /Open Menu/i }).click();
    await page.getByText('Logout').click();


    //await page.getByAltText('Open Menu').click();

    //const locatorNavMenu = page.locator('#react-burger-menu-btn');
    //await page.click(locatorNavMenu);

    //button[@id='react-burger-menu-btn']
    
    // Click Menu
    
   // const locatorUserMenu = page.locator('#react-burger-menu-btn');
   // #react-burger-menu-btn
   //button[@id='react-burger-menu-btn']
   // <button data-testid="directions">Itinéraire</button>
    // FEHLERMELDUNG await page.getByRole('button', { name: /Open Menu/i }).click();

    // Click the Login button to log in 
    //await page.getByRole('button').click();
    //await page.locator('xpath=//button[@id=react-burger-menu-btn').click();
  
  
  });

*/

  // Generate HTML Report
  // npx playwright show-report