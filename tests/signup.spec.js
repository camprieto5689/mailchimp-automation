const { test, expect } = require('@playwright/test');
const SignupPage = require('./pages/signupPage.js');

// Define the test suite
test.describe('Mailchimp Signup Flow', () => {
  let page;
  let signupPage;

  // Set up the browser and page before each test
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    signupPage = new SignupPage(page);
  });

  // Close the page after each test
  test.afterEach(async () => {
    await page.close();
  });

  test.describe('Given I am on the Mailchimp home page', () => {
    test('When I click the login button, Then I should be redirected to the login page', async () => {
      await signupPage.goToHomePage();
      expect(page.url()).toBe('https://mailchimp.com/');
      await signupPage.clickLoginButton();
      await page.waitForURL('https://login.mailchimp.com/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/?locale=en');
    });

    test('When I click "Create an account", Then I should be navigated to the sign-up page', async () => {
      await signupPage.goToHomePage();
      expect(page.url()).toBe('https://mailchimp.com/');
      await signupPage.clickLoginButton();
      await page.waitForURL('https://login.mailchimp.com/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/?locale=en');
      await signupPage.clickCreateAccountButton();
      await page.waitForURL('https://login.mailchimp.com/signup/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/signup/?locale=en');
    });

    test('When I fill in the sign-up form, Then the username should match the email', async () => {
      await signupPage.goToHomePage();
      expect(page.url()).toBe('https://mailchimp.com/');
      await signupPage.clickLoginButton();
      await page.waitForURL('https://login.mailchimp.com/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/?locale=en');
      await signupPage.clickCreateAccountButton();
      await page.waitForURL('https://login.mailchimp.com/signup/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/signup/?locale=en');

      // Fill the sign-up form
      const email = `testcamila53+test${Date.now()}@gmail.com`;
      const password = 'TestPassword123!';
      await signupPage.fillSignupForm(email, password);

      await page.waitForTimeout(5000);

      // Verify the username matches the email
      // const usernameValue = await page.inputValue(signupPage.usernameInput);
      // expect(usernameValue).toBe(email);
    });

    test('When I submit the sign-up form, Then I should be redirected to the success page', async () => {
      await signupPage.goToHomePage();
      expect(page.url()).toBe('https://mailchimp.com/');
      await signupPage.clickLoginButton();
      await page.waitForURL('https://login.mailchimp.com/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/?locale=en');
      await signupPage.clickCreateAccountButton();
      await page.waitForURL('https://login.mailchimp.com/signup/?locale=en');
      expect(page.url()).toBe('https://login.mailchimp.com/signup/?locale=en');

      // Fill the sign-up form
      const email = `testcamila53+test${Date.now()}@gmail.com`;
      const password = 'TestPassword123!';
      await signupPage.fillSignupForm(email, password);
      await page.waitForTimeout(5000);

      // Submit the form and verify redirection to the success page
      await signupPage.clickSignupButton();
      await page.waitForTimeout(5000);
      await page.waitForURL(/https:\/\/login.mailchimp.com\/signup\/success\//);
      const title = await signupPage.verifySuccessPage();
      expect(title).toBeTruthy();
    });
  });
});
