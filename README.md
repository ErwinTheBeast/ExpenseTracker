# ExpenseTracker

Frontend for tracking and managing expenses. Built with React, TypeScript, and Webpack.

## Prerequisites

- [Node.js 25](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Setup

```bash
yarn install
```

## Development

```bash
yarn start
```

Starts the webpack dev server with hot module replacement and opens the app in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Dev server with HMR |
| `yarn build` | Production bundle (output: `build/`) |
| `yarn test` | Run Jest tests with coverage |
| `yarn typecheck` | TypeScript type checking |
| `yarn lint` | ESLint |
| `yarn lint:fix` | ESLint with auto-fix |
| `yarn prettier` | Format source files |
| `yarn prettier:check` | Check formatting |
| `yarn clean` | Remove `build/` and `coverage/` |

## Project structure

```
src/           React application source
webpack/       Webpack dev and prod configs
build/         Production output (generated)
```
