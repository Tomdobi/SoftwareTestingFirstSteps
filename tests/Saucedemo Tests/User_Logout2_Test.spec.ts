import { test, expect } from '@playwright/test';
import { SaucedemoBaseHelpers } from './saucedemo_helper';

test('Logout as user',async ({ page})=> {
    const sauceDemo = new SaucedemoBaseHelpers(page);
    await sauceDemo.goto();
    await sauceDemo.userLoginSaucedemo();
    await sauceDemo.userLogoutSaucedemo();


})