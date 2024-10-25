Bug reports

Bug Report 1: Signup Button Redirects to Pricing Page Instead of Signup Page
Title: Signup button redirects user to the Pricing page instead of the Signup page

Description: When a user clicks on the "Sign Up" button located on the Mailchimp homepage (https://mailchimp.com), the user is incorrectly redirected to the Pricing page (https://mailchimp.com/pricing/marketing/) instead of the intended Signup page (https://login.mailchimp.com/signup/?locale=en).

Steps to Reproduce:

1. Navigate to the Mailchimp homepage at https://mailchimp.com.
2. Scroll down to find any "Sign Up" button (there are multiple on the page, including in the header).
3. Click on the "Sign Up" button.

Expected Result:
The user should be redirected to the Mailchimp Signup page: https://login.mailchimp.com/signup/?locale=en.

Actual Result:
The user is redirected to the Pricing page: https://mailchimp.com/pricing/marketing/ instead of the Signup page.

Severity: High (This misleads users, causing confusion when trying to create an account.)

Environment:

Browser: Chrome, Firefox, Safari
OS: Windows 11


Additional Notes:
This behavior was observed consistently across different browsers. 
The issue may be related to incorrect hyperlinking on the "Sign Up" buttons across the homepage.

-------------------------------------------------------------------------------------------------------

Bug Report 2: Language Preference Not Fully Applied in the Integrations Search Page Filters
Title: Filters and Search Placeholder Remain in English After Switching Language to Any language

Description: When the website language is switched to any language (https://mailchimp.com/fr/integrations/search/), the filters in the "Filter by" section, as well as the search bar placeholder, remain in English. Despite selecting French as the preferred language, all categories and options under the "Filter by" section (e.g., "Analytics," "Booking & Scheduling," "Contact Management") are displayed in English. Additionally, the search bar placeholder text ("Try an app name") stays in English instead of being localized to the preferred language.

Steps to Reproduce:

1. Navigate to the French version of the Mailchimp Integrations search page: https://mailchimp.com/fr/integrations/search/.
2. Observe the filters under the "Filter by" section and the search bar placeholder.

Expected Result:
All filter categories and the search bar placeholder text should be translated to the preferred language after switching the language. For example:

"Filter by" should be translated to "Filtrer par." if French is selected.
Placeholder text in the search bar should be in French, e.g., "Essayez le nom d'une application.", if French is selected.

Actual Result:
The filter categories (e.g., "Analytics," "Customer Service," "Made by Mailchimp") and the search bar placeholder text ("Try an app name") remain in English, even though the website language is switched to French.

Severity: Medium (This affects the localization and usability for non-English speaking users.)

Environment:

Browser: Chrome, Firefox, Safari
OS: Windows 11


Additional Notes:
The issue persists across different browsers and different languages. It seems that certain sections of the page are not correctly localized, making the experience inconsistent for non-English users.


----------------------------------------------------------

# Mailchimp Test Automation

This repository contains test automation scripts developed using Playwright to automate the sign-up process on Mailchimp. 

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Reporting](#reporting)
- [Error Handling](#error-handling)
- [Video Demonstration](#video-demonstration)
- [Contributing](#contributing)

## Prerequisites
Make sure you have the following installed on your machine:
- Node.js (v16 or later)
- npm (comes with Node.js)
- Git (for cloning the repository)

## Installation

1. Clone the repository:
 
   git clone https://github.com/camprieto5689/mailchimp-test-automation.git
   cd mailchimp-test-automation


Install the required packages:

npm install

 If you want to run the tests on specific browsers, ensure you have the necessary browser binaries installed. Playwright will automatically download them upon installation.

Running Tests
To run the tests, use the following command:


npx test

This command will execute all tests in the repository across all configured browsers.

Running Tests in GitHub Actions

The project includes a GitHub Actions workflow that runs the tests automatically on each push to the repository. You can view the results of these actions in the Actions tab of the GitHub repository.

Project Structure

The project is organized using the Page Object Model (POM) for better maintainability and readability. Below is an overview of the project structure:



├── tests
│   ├── signup.spec.js         # Test script for user sign-up
│   ├── emailvalidation.spec.js          # Test script for user login
├───├─── pages
│   ├───── SignupPage.js          # Page object for sign-up page
├── playwright.config.js        # Playwright configuration file
├── package.json                # Project metadata and dependencies
└── README.md                  # This file

Browser Support
The tests are configured to run on Chrome, Firefox, and Safari. The configuration for parallel execution is set up in the playwright.config.js file.

Reporting
The project includes built-in reporting functionality. After running the tests, reports will be generated in the reports directory. You can obtain the reports by running:


npx playwright show-report

This command will open a detailed report in your default browser.

Error Handling

When an error occurs during test execution, a screenshot will be captured and saved automatically in the screenshots directory. This feature helps in debugging and understanding failures.

Video Demonstration

A video demonstrating the project running on a local machine can be found here: https://drive.google.com/file/d/14Q_FKxGVDsmx9DszAyUOn3Bm_zqPp10_/view?usp=sharing