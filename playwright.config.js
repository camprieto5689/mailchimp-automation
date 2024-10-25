const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  retries: 3, // Number of retries for failed tests
  reporter: [
    ['html', { open: 'on-failure' }],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  timeout: 60 * 500000,
  fullyParallel: true,
  projects: [
    {
      name: 'chromium-headful',
      use: {
        browserName: 'chromium',
        headless: false,  // Run in headful mode
       // launchOptions: { slowMo: 1 },
      },
    },
    {
      name: 'chromium-headless',
      use: {
        browserName: 'chromium',
        headless: true  // Run in headless mode
       // launchOptions: { slowMo: 1 },
      },
    },
    {
      name: 'firefox-headful',
      use: {
        browserName: 'firefox',
        headless: false
       // launchOptions: { slowMo: 1 },
      },
    },
    {
      name: 'firefox-headless',
      use: {
        browserName: 'firefox',
        headless: true
        //launchOptions: { slowMo: 1 },
      },
    },
    {
      name: 'webkit-headful',
      use: {
        browserName: 'webkit',
        headless: false
       // launchOptions: { slowMo: 1 },
      },
    },
    {
      name: 'webkit-headless',
      use: {
        browserName: 'webkit',
        headless: true
        //launchOptions: { slowMo: 1 },
      },
    },
  ],
  use: {
    headless: false,
    contextOptions: {
      // Block persistent storage such as cookies, cache, and local storage
      storageState: undefined, // This ensures no storage state is carried over between tests
    },
    baseURL: 'https://mailchimp.com',
    screenshot: 'only-on-failure',
    trace: 'off',
    video: 'on',
    viewport: { width: 1440, height: 900  },
    actionTimeout: 60 * 500000,
  },
  outputDir: './test-results/',
  workers: 2,
});
