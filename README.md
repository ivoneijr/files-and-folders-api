# files-and-folders-api

This repository houses the backend development of a web application focusing on the implementation and understanding of RESTful APIs. Through this project, students have the opportunity to apply the principles and patterns of REST learned in lectures, setting a foundation for a forthcoming frontend integration.

## Includes API Server utilities

| Name                                           | Description                                                                                                                |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [morgan](https://www.npmjs.com/package/morgan) | HTTP request logger middleware for node.js                                                                                 |
| [helmet](https://www.npmjs.com/package/helmet) | Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!      |
| [dotenv](https://www.npmjs.com/package/dotenv) | Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`                  |
| [cors](https://www.npmjs.com/package/cors)     | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. |

## Development utilities

| Name                                                   | Description                                                                                                                                                       |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [typescript](https://www.npmjs.com/package/typescript) | TypeScript is a language for application-scale JavaScript.                                                                                                        |
| [ts-node](https://www.npmjs.com/package/ts-node)       | TypeScript execution and REPL for node.js, with source map and native ESM support.                                                                                |
| [nodemon](https://www.npmjs.com/package/nodemon)       | nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. |
| [eslint](https://www.npmjs.com/package/eslint)         | ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.                                                                   |
| [typescript-eslint](https://typescript-eslint.io/)     | Tooling which enables ESLint to support TypeScript.                                                                                                               |
| [jest](https://www.npmjs.com/package/jest)             | Jest is a delightful JavaScript Testing Framework with a focus on simplicity.                                                                                     |
| [supertest](https://www.npmjs.com/package/supertest)   | HTTP assertions made easy via superagent.                                                                                                                         |
| [prisma](https://github.com/prisma)                    | DB ORM                                                                                                                                                            |
| [bcryptjs](https://github.com/prisma)                  | password hash and check                                                                                                                                           |
| [jsonwebtoken](https://github.com/prisma)              | Auth manage                                                                                                                                                       |
| [zod](https://github.com/prisma)                       | Schema validation                                                                                                                                                 |

## Running locally instructions

```sh
pnpm i
pnpm db:migrate:dev
pnpm  dev
```

## Useful commands

```sh
pnpm test
pnpm build
pnpm start
db:migrate:draft
```
