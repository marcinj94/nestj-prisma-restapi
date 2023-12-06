# NestJS + Typescript + Jest starter Template

---

## This repository is 🔋 battery packed with:

- ⚡️ NestJS v10
- ✨ TypeScript
- 🃏 Jest — Configured for unit testing
- 📏 ESLint & AirBnb Style Guide — Find and fix problems in your code, also will auto sort your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- 🔥 Conventional Branch Lint - Make sure you & your teammates follow conventional branch names
- 🐙 CHANGELOG automatization - create .md file based on commit history

## Incoming ✨ features :

- 📈 Absolute Import and Path Alias — Import components using @/ prefix
- 👷 Github Actions — Lint your code on PR
- ⏰ Release Please — Generate your changelog by activating the release-please workflow

---

## Additional 💡 informations:

### Scripts 📝:

#### Prettier

- check - verify app code to prettier rules

```bash
yarn prettier:check
```

- fix - update app code to prettier rules

```bash
yarn prettier:fix
```

#### Eslint + AirBnb Style Guide

- check - verify app code to eslint & airBnb rules

```bash
yarn eslint:check
```

- fix - update app code to eslint & airBnb rules

```bash
yarn eslint:fix
```

#### Jest

- test - run all app tests

```bash
yarn test
```

- test:watch - run all your tests and wait for any updates

```bash
yarn test:watch
```

For that it's used **validate-branch-name** package, configuration is available on **.validate-branch-namerc.json** file

#### 🐙 CHANGELOG automatization

From now on after you commit your changes you will be able to run

```bash
yarn release:minor
```

or

```bash
yarn release:patch
```

or

```bash
yarn release:major
```

depending on your changes (according to [NPM docs](https://docs.npmjs.com/about-semantic-versioning) tutorial).

### Husky with:

#### 🔥 Conventional Commit Lint

For that it's used **commitizen** & **commitlint** packages. To commit your changes instead of using tradition **git commit** command, use (interactive helper):

```bash
yarn save:commit
```

#### 🤖 Conventional Branch Lint

---

⚠️ How to fix **TypeError: \_prettier.resolveConfig.sync is not a function** error:

Downgrade according packages to specific versions [https://github.com/prettier/eslint-plugin-prettier/issues/562#issuecomment-1772512836]:

```
"eslint-plugin-prettier": "^4.2.1",
"prettier": "^2.8.8",
"pretty-quick": "^3.1.3",
```

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
