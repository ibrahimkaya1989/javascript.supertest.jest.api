# API Test Automation

**Version:** 2026.10.1

Jest and Supertest smoke tests for the JSONPlaceholder API. The API simulates
write operations; created, updated, and deleted resources are not persisted.

## Purpose, scope, and overview

This project provides automated HTTP smoke tests for the JSONPlaceholder demo
API. It checks the response status codes and response data for the following
resources and operations:

- Albums, comments, photos, posts, todos, and users
- Collection `GET` requests
- `POST`, `PUT`, `PATCH`, and `DELETE` requests

The repository contains test automation rather than an API server. Since
JSONPlaceholder simulates write operations, these tests do not verify that
changes persist between requests.

## Project structure and worktree

```text
.
├── .env.example
├── .gitignore
├── jest.config.js
├── package.json
├── package-lock.json
├── readMe.md
└── tests/
    ├── api/
    │   ├── albums.test.js
    │   ├── comments.test.js
    │   ├── photos.test.js
    │   ├── posts.test.js
    │   ├── todos.test.js
    │   ├── users.test.js
    │   └── helpers/
    │       └── apiHelper.js
    └── setup/
        └── jest.setup.js
```

The API suites live in `tests/api/`; shared HTTP request logic is in
`tests/api/helpers/apiHelper.js`, and Jest environment setup is in
`tests/setup/jest.setup.js`. The `reports/` directory is generated when tests
run and is ignored by Git. `node_modules/` is also local and ignored. Use
`.env.example` as a template for a local `.env` file when overriding
`API_BASE_URL`.

## Technologies used

- **JavaScript (CommonJS)** for the test suites and shared helpers
- **Node.js 20+** and **npm** for runtime and dependency management
- **Jest 30** for test execution and assertions
- **Supertest 7** for HTTP requests
- **dotenv 18** for optional local environment configuration
- **jest-html-reporters 3** and **jest-junit 17** for HTML and JUnit reports
- **JSONPlaceholder** as the external demo API under test

## Requirements

- Node.js 20 or newer
- npm

## Setup

Install the locked dependency versions:

```bash
npm ci
```

The default API URL is `https://jsonplaceholder.typicode.com`. To override it,
copy `.env.example` to `.env` and set `API_BASE_URL` to the target API URL.

## Run tests

```bash
npm test
```

Run the suite in CI mode:

```bash
npm run test:ci
```

Run tests in watch mode during development:

```bash
npm run test:watch
```

## Reports

Jest writes a JUnit report and an HTML report to the ignored `reports/`
directory:

- `reports/junit-reporter.xml`
- `reports/html-reporters.html`

The reports are regenerated whenever the test suite runs.
