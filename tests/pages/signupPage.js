class SignupPage {
    constructor(page) {
        this.page = page;

        // Selector for the Mailchimp login button
        //this.loginButton = page.locator('a:has-text("Log In")');
        this.loginButton = 
       // page.locator("//a[@data-event-handler='manual'][normalize-space()='Log In']");
       //page.locator("text='Log'");
       //page.locator("//nav//a[normalize-space()='Log In']");
       page.locator("//a[contains(@class, 'ctaSecondary') and @data-event-handler='manual' and normalize-space()='Log In']");
       //page.locator("header nav a.ctaSecondary");
       //page.locator("//header//nav//a[contains(@class, 'ctaSecondary')]");
       //page.locator("[data-testid='login-button']");
       //page.locator("a.ctaSecondary:has-text('Log In')");
       //page.locator('role=link[name="Log In"]');
       //page.locator("text='Log'");
       //page.locator("text='Log In'");
       //page.locator("//nav//a[normalize-space()='Log In']");
       //page.locator("//a[contains(@class, 'ctaSecondary') and @data-event-handler='manual' and normalize-space()='Log In']");
       //page.locator("nav a.ctaSecondary");
       //page.locator("a[href='https://login.mailchimp.com/?locale=en'][data-event-handler='manual']");
       //page.locator("a.ctaSecondary[data-event-handler='manual']");



        // Selectors for the login page (https://login.mailchimp.com/?locale=en)
        this.createAccountButton = page.locator('#create-account-link');


        // Selectors for the signup page (https://login.mailchimp.com/signup/?locale=en)
        this.emailInput = page.locator('#email');
        this.usernameInput = page.locator('#new_username');
        this.passwordInput = page.locator('#new_password');
        this.signUpButton = page.locator("//button[@id='create-account-enabled']");

        // Selectors for the success page (https://login.mailchimp.com/signup/success/)
        this.successTitle = page.locator('h1[class="!margin-bottom--lv3 no-transform center-on-medium success-h2"]');
    }

    // Navigate to Mailchimp home page
    async goToHomePage() {
        try {
            await this.page.goto('https://mailchimp.com/');
            await this.page.waitForTimeout(5000); // Wait for the page to load
        } catch (error) {
            console.error('Navigation to the Mailchimp homepage failed:', error);
            throw error;  // Rethrows the error to fail the test if necessary
        }
    }

    // Click login button
    async clickLoginButton() {
        try {
            console.log('Attempting to click the login button...');
            await this.loginButton.click({ timeout: 10000 }); 
            console.log('Login button clicked successfully.');
        } catch (error) {
            console.error('Clicking the login button failed:', error);
            throw new Error('Login button is not clickable within the timeout period.');
        }
    }

    // Click the "Create an account" button
    async clickCreateAccountButton() {
        try {
            await this.createAccountButton.click();
        } catch (error) {
            console.error('Clicking the "Create an account" button failed:', error);
            throw error;
        }
    }

    // Fill the signup form with email and password
    async fillSignupForm(email, password) {
        try {
            await this.emailInput.fill(email);
            await this.passwordInput.fill(password);
        } catch (error) {
            console.error('Filling the signup form failed:', error);
            throw error;
        }
    }

    // Click the "Sign Up" button
    async clickSignupButton() {
        try {
            await this.signUpButton.click({ timeout: 5000 }); 
        } catch (error) {
            console.error('Clicking the "Sign Up" button failed:', error);
            throw error;
        }
    }

    // Verify if the success page title is visible
    async verifySuccessPage() {
        try {
            return await this.successTitle.isVisible(); 
        } catch (error) {
            console.error('Verification of the success page failed:', error);
            throw error;
        }
    }
}

module.exports = SignupPage;
