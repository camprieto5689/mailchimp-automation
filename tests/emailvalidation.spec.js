const { test, expect } = require('@playwright/test');
const GmailLoginPage = require('./pages/gmailLoginPage.js');

test.describe('Gmail Login and Mailchimp Account Activation Flow', () => {
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
