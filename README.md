# test-webdriverio-course

Set up your GitHub repository with a `README.md` and `.gitignore` file

## Set Up Project

```
 npm init -y

 npm i --save-dev @wdio/cli
``` 

## Set Up Configuration File for WebdriverIO (`wdio`)

Generate configuration file:

```
 npx wdio config
```

Answer the questions with the following:

```
? Where should your tests be launched  **local - https://www.npmjs.com/package/@wdio/local-runner**
? Shall I install the runner plugin for you? **Yes**
? Where is your automation backend located? **On my local machine**
? Which framework do you want to use? **mocha**
? Shall I install the framework adapter for you? **Yes**
? Do you want to run WebdriverIO commands synchronous or asynchronous? **sync**
? Where are your test specs located? **./test/specs/**/*.js**
? Which reporter do you want to use? (Press <space> to select, <a> to toggle all, <i> to invert selection) - **choose Allure and say 'yes' to installing the reporter library. (space to select)**
? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection) - **Choose 'selenium-standalone' (space to select) - yes to install**
? Level of logging **verbosity info**
? What is the base url? **http://localhost:8080/**
```

## Create Test Spec

Create a folder called `test` and under that create a folder called `specs`.

In the `specs` folder, create a file called `products.spec.js` and add the following code to write your test:

```javascript
const assert = require('assert');

describe('angular page', () => {
    it('should have the right title', () => {
        browser.url('');
        const title = browser.getTitle();
        assert.equal(title, 'Angular7Crud');
    });

    it('should be able to create a product', () => {
        
        browser.url('');
        
        var addProduct = $('.mat-flat-button','.mat-primary');
        
        addProduct.click();

        var productName = $('#mat-input-0');
        var productDescription = $('#mat-input-1');
        var productPrice = $('#mat-input-2');
        var submitButton = $('[type=submit]');

        productName.setValue("newt");
        productDescription.setValue("amphibian");
        productPrice.setValue("100");
        submitButton.click();

        var productHeader = $('h2');

        assert.equal(productHeader.getText(), "newt", "Heading incorrect");

        


    });

});

```

## Running Your Test

Update the `test` line in your `package.json` file to the following:

```json
"scripts": {
    "test": "wdio wdio.conf.js"
  },
```

Then run your test with the following command:

```
npm test
```

## Generating the Report

Install Allure Command line through `npm`:

```
npm install -g allure-commandline --save-dev
```

Then display report with the following command in the `Terminal`:

```
allure generate ./allure-results && allure open
```

## Continuous Integration

The `Jenkinsfile` will be the same as on the course, except you will need to remove the `webdriver-manager` `bat` steps and the HTML report `post` section.

Your report will be different however. Here are the instructions for generating your Allure report in Jenkins (see link):

https://docs.qameta.io/allure/#_jenkins

## Adding Screenshots to the Report

Screenshots can be attached to the report by using the `takeScreenshot` function from WebDriverIO in an `afterStep` hook. First set `disableWebdriverScreenshotsReporting: false` in reporter options, then add in the afterStep hook

```javascript
afterTest: function(test) {
    if (test.error !== undefined) {
      browser.takeScreenshot();
    }
  }
```

When this function is called, a screenshot image will be attached to the allure report.
