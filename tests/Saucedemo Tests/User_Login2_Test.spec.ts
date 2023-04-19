import { test, expect } from '@playwright/test';
import { SaucedemoLogin } from './saucedemo_helper';

test('Login as user',async ({ page})=> {
    const sauceDemo = new SaucedemoLogin(page);
    await sauceDemo.goto();
    await sauceDemo.userLoginSaucedemo();



})