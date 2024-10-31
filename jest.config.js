module.exports = {
    testEnvironment: 'node',
    setupFiles: ['./tests/setup/jest.setup.js'],
    reporters: [ "default", 
      [ "jest-junit", { "outputDirectory": "reports", "outputName": "junit-reporter.xml" } ], 
      [ "jest-html-reporter", { "outputPath": "./reports/html-reporter.html", "pageTitle": "Html Report", "includeFailureMsg": true } ],
      [ "jest-html-reporters", { "publicPath": "./reports", "filename": "html-reporters.html", "openReport": true, "expand": true, "pageTitle": "My Test Report", }],
    ],
    //testResultsProcessor: "jest-allure-reporter", // TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of ArrayBuffer
    testTimeout: 10000 // Set a timeout to handle API response times
  };