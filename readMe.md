### Dependencies

Supertest and jest dependencies
```bash
npm install --save-dev jest supertest dotenv
```

Reporter dependencies
```bash
npm install --save-dev allure-commandline jest-junit jest-html-reporter jest-html-reporters jest-allure-reporter
```

### Running

Run commands
```bash
npx jest
npx jest --watchAll
```

package.json scripts
```bash
npm run test             # Run tests
npm run report:generate  # Generate Allure report
npm run report:open      # Open Allure report
```