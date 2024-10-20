const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

  retries: 1, // Number of retries for failed tests
  reporter: [
    ['html', { open: 'on-failure' }],
    ['json', { outputFile: 'test-results/test-results.json' }],
    ['list'],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
  timeout: 60 * 10000,
  fullyParallel: true,
  projects: [
    { name: 'chromium', use: { browserName: 'chromium', launchOptions: { slowMo: 10 } } },
    { name: 'firefox', use: { browserName: 'firefox', launchOptions: { slowMo: 10 } } },
    { name: 'webkit', use: { browserName: 'webkit', launchOptions: { slowMo: 10 } } },
  ],
  use: {
    headless: false,
    contextOptions: {
      // Block persistent storage such as cookies, cache, and local storage
      storageState: undefined, // This ensures no storage state is carried over between tests
    },
    baseURL: 'https://mailchimp.com',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'on',
    viewport: { width: 1600, height: 900  },
    actionTimeout: 60 * 10000,
  },
  outputDir: './test-results/',
  workers: 2,
});
