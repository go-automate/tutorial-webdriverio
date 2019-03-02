# test-webdriverio-course


Commands:

Install wdio command line:

 npm i --save-dev @wdio/cli

Generate configuration file:

 npx wdio config

? Where should your tests be launched  local - https://www.npmjs.com/package/@wdio/local-runner
? Shall I install the runner plugin for you? Yes
? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
? Where are your test specs located? ./test/specs/**/*.js
? Which reporter do you want to use? (Press <space> to select, <a> to toggle all, <i> to invert selection) - choose Allure and say 'yes' to installing the reporter library. (space to select)
? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection) - Choose 'selenium-standalone' (space to select) - yes to install
? Level of logging verbosity info
? What is the base url? http://localhost:8080/


Write test and run with:

npx wdio wdio.conf.js

Install Allure Command line:

npm install -g allure-commandline --save-dev

Display report:

allure generate ./allure-results && allure open

Instructions for Jenkins:

https://docs.qameta.io/allure/#_jenkins

Add Screenshots
Screenshots can be attached to the report by using the takeScreenshot function from WebDriverIO in afterStep hook. First set disableWebdriverScreenshotsReporting: false in reporter options, then add in afterStep hook

afterTest: function(test) {
    if (test.error !== undefined) {
      browser.takeScreenshot();
    }
  }
As shown in the example above, when this function is called, a screenshot image will be attached to the allure report.
