const { test, expect } = require('@playwright/test');
const { signupFlow } = require('./utils/signupHelper.js');
const GmailLoginPage = require('./pages/gmailLoginPage.js');
const SignupPage = require('./pages/signupPage.js');

let signupPage; // Declare signupPage in the outer scope
let browser; // Declare browser in the outer scope

test.describe('Gmail Login and Mailchimp Account Activation Flow', () => {
   
  // Step 1: Run the signup flow before any tests 
  test.beforeAll(async ({ browser: b }) => {
    browser = b; // Assign the browser instance to the outer variable
    signupPage = await browser.newPage(); // Assign the new page to the outer variable
    await signupFlow(signupPage, expect); 
  });
  
  // Close the page 
  test.afterAll(async () => {
    if (signupPage) {
        await signupPage.close(); // Safely close the page
    }
    if (browser) {
        await browser.close(); // Safely close the browser
    }
});

  test('Given I have a Gmail account, When I login and check for a Mailchimp email, Then I should be able to activate my account', async ({ page }) => {
    
    const email = 'testcamila53@gmail.com'; 
    const password = 'TestPlaywrightCamila53+';

    const gmailLoginPage = new GmailLoginPage(page);

    // Step 1: Navigate to Gmail
    await gmailLoginPage.goToGmail();
    
    // Step 2: Login to Gmail
    await gmailLoginPage.login(email, password);
    
    // Step 3: Search for Mailchimp email with subject "Activate your Mailchimp account"
    await gmailLoginPage.searchForMailchimpEmail();
    
    // Step 4: Open the email by clicking the row that contains the subject
    await gmailLoginPage.openMailchimpEmail();

    // Step 5: Click the "Activate Account" button and wait for a new tab to open
    const newPage = await gmailLoginPage.clickActivateAccount();

    // Step 6: Wait for the activation page to load in the new tab and validate the URL
    await newPage.waitForURL(/https:\/\/us[0-9]+\.admin\.mailchimp\.com\/signup\/setup/, { timeout: 100000 });

    // Log the final URL for debugging
    console.log('Final URL:', newPage.url());

    // Validate that the correct page loaded
    expect(newPage.url()).toMatch(/https:\/\/us[0-9]+\.admin\.mailchimp\.com\/signup\/setup/);
  });
});
