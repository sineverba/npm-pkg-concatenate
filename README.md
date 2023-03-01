Concatenate
===========

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Fconcatenate.svg)](https://badge.fury.io/js/%40sineverba%2Fconcatenate) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-concatenate/branches/master.svg?style=shields&key=39b8f9bd-3213-4836-a1b3-ca116c91a9e9)](https://sineverba.semaphoreci.com/projects/npm-pkg-concatenate) |
| Circle CI | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/sineverba/npm-pkg-concatenate/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/sineverba/npm-pkg-concatenate/tree/master) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-concatenate/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-concatenate?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-years-interval&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=npm-pkg-years-interval) |

`concatenate` returns a single string starting from two strings. If first (or second) string are empty, it returns the other one.

## Why is it useful?

I use it in a name + surname concatenation, if one of them can be empty. E.g. "Alex" + "" doesn't return "Alex " (note the space!) but "Alex".

### Installation
`npm install @sineverba/concatenate`

### Usage

```js
import { concatenate } from "@sineverba/concatenate";

const name = " ";
const surname = "Foo";

const result = concatenate(name, surname);
console.log(result); // prints Foo
```

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
