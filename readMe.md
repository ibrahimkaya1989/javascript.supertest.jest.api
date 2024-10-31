### Dependencies

npm install --save-dev jest supertest dotenv
npm install --save-dev allure-commandline jest-junit jest-html-reporter jest-html-reporters jest-allure-reporter

### Running

npx jest
npx jest --watchAll

npm run test             # Run tests
npm run report:generate  # Generate Allure report
npm run report:open      # Open Allure report