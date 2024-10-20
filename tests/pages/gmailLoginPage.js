class GmailLoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async goToGmail() {
      await this.page.goto('https://mail.google.com/');
    }
  
    async login(email, password) {
      await this.page.fill('input[type="email"]', email);
      await this.page.click('button:has-text("Next")');
      await this.page.waitForSelector('input[type="password"]');
      await this.page.fill('input[type="password"]', password);
      await this.page.click('button:has-text("Next")');
  
      // Wait for the inbox to load
      await this.page.waitForSelector('table[role="grid"]');
    }
  
    async searchForMailchimpEmail() {
      await this.page.fill('input[aria-label="Search mail"]', 'Activate your Mailchimp account from clientservices@mailchimp.com');
      await this.page.keyboard.press('Enter');
      await this.page.waitForSelector('table[role="grid"] tr');
    }
  
    async openMailchimpEmail() {
      const rowSelector = "//tr[contains(., 'Activate your Mailchimp account')]"; // XPath for the row
      await this.page.waitForSelector(rowSelector, { state: 'visible' });
      await this.page.click(rowSelector);
    }
  
    async clickActivateAccount() {
      await this.page.waitForSelector('a:has-text("Activate Account")');
      const [newPage] = await Promise.all([
        this.page.waitForEvent('popup'), // Wait for the new tab to open
        this.page.click('a:has-text("Activate Account")') // Click on the "Activate Account" button
      ]);
      return newPage; // Return the new page for further actions
    }
  }
  
  module.exports = GmailLoginPage;