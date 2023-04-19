import {expect, Locator, Page} from '@playwright/test';

export class SaucedemoLogin {
    readonly page: Page;
    readonly InputfieldUser: Locator;
    readonly InputfieldPass: Locator;
    readonly LoginButton: Locator;
    readonly MenuButton: Locator;
    readonly LogoutLink: Locator;



    constructor(page: Page){
        this.page = page;
        this.InputfieldUser = page.locator('#user-name');
        this.InputfieldPass = page.locator('#password');
        this.LoginButton = page.getByRole('button');
        this.MenuButton = page.getByRole('button', { name: /Open Menu/i });
       // this.LogoutButton = page.getByRole('button', { name: /Open Menu/i });
        this.LogoutLink = page.locator('a',{hasText:'Logout'});
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async userLoginSaucedemo() {
        await expect(this.InputfieldUser).toBeEmpty();
        await this.InputfieldUser.fill('standard_user');
        await expect(this.InputfieldPass).toBeEmpty();
        await this.InputfieldPass.fill('secret_sauce');
        await this.LoginButton.click();
        await this.page.screenshot({ path: './screenshots/AfterLoginClick.png', fullPage:true });
        await expect(this.page).toHaveURL(/.*inventory/);
        await this.page.screenshot({ path: './screenshots/AfterLoggedin.png', fullPage: true });

        // click auch ohne costructor möglich
        //await this.page.getByRole('button').click();
    }


    async userLogoutSaucedemo() {
        await this.MenuButton.click();
        await this.LogoutLink.click();
    }

}
