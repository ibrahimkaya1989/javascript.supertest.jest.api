module.exports = {
  testEnvironment: 'node',
  setupFiles: ['./tests/setup/jest.setup.js'],
  clearMocks: true,
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'reports', outputName: 'junit-reporter.xml' }],
    [
      'jest-html-reporters',
      {
        publicPath: 'reports',
        filename: 'html-reporters.html',
        openReport: false,
        expand: false,
        pageTitle: 'API Test Report',
      },
    ],
  ],
  testTimeout: 10000,
};