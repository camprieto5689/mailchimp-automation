const SignupPage = require('../pages/signupPage.js');

async function signupFlow(page, expect) {
  console.log('Starting signup process');
  const signupPage = new SignupPage(page);

  // Go to the Mailchimp home page
  await signupPage.goToHomePage();
  console.log('Navigated to homepage:', page.url());
  expect(page.url()).toBe('https://mailchimp.com/');

  // Perform signup process
  await signupPage.clickLoginButton();
  await page.waitForURL('https://login.mailchimp.com/?locale=en');
  expect(page.url()).toBe('https://login.mailchimp.com/?locale=en');

  await signupPage.clickCreateAccountButton();
  await page.waitForURL('https://login.mailchimp.com/signup/?locale=en');
  expect(page.url()).toBe('https://login.mailchimp.com/signup/?locale=en');

  // Generate a dynamic email for the test
  const email = `testcamila53+test${Date.now()}@gmail.com`;
  const password = 'TestPassword123!';
  await signupPage.fillSignupForm(email, password);
  await page.waitForTimeout(5000);

  // Submit the form and verify redirection to the success page
  await signupPage.clickSignupButton();
  //await page.waitForTimeout(25000);
  await page.waitForURL(/https:\/\/login.mailchimp.com\/signup\/success\//);
  const title = await signupPage.verifySuccessPage();
  expect(title).toBeTruthy();

  //return { email, password }; // Return email and password for further use
}

module.exports = { signupFlow };