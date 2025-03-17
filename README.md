# NodeTs Starter

This boilerplate for a NodeJS application uses TypeScript and integrates Jest, for a streamlined and standardized development experience.

---

## Features

- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Jest**: A JavaScript testing framework focused on simplicity.
- **Prettier**: A code formatter to ensure consistent code style.

## Installation

1. Clone the repository.
2. Run `pnpm install` to install dependencies.
3. Use the scripts defined in `package.json` for development, building, and testing.

```bash
pnpm run dev
```
Starts the application in development mode using `nodemon`, monitoring for file changes. Environment variable `NODE_ENV` is set to 'development'

```bash
pnpm run start
```
First runs the build script to compile TypeScript to JavaScript, then starts the application in production mode by setting `NODE_ENV` to 'production'

```bash
pnpm run build
```
Compiles TypeScript code to JavaScript using SWC, a fast compiler, and copies all non-TypeScript files from the `src` directory to the `dist` directory

```bash
pnpm run test
```
Executes the test suite using Jest, ensuring proper handling and exit of tests


## Contribution

Contributions are welcome. Please adhere to standard pull request practices and ensure your changes pass all tests and lint checks before submitting.

---

This template is a basic guide and can be customized further based on the specific needs of your project.
