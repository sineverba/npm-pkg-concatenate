Concatenate
===========

| CI / CD | Status |
| ------- | ------ |
| NPM | TBD |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-concatenate/branches/master.svg?style=shields&key=39b8f9bd-3213-4836-a1b3-ca116c91a9e9)](https://sineverba.semaphoreci.com/projects/npm-pkg-concatenate) |
| Circle CI | TBD |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-concatenate/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-concatenate?branch=master) |
| SonarCloud | TBD |

`concatenate` returns a single string starting from two strings. If first (or second) string are empty, it returns the other one.

## Why is it useful?

I use it in a name + surname concatenation, if one of them can be empty. E.g. "Alex" + "" doesn't return "Alex " (note the space!) but "Alex".

### Installation
`npm install @sineverba/concatenate`

### Usage

```js
import { concatenate } from "shortfield";

const name = " ";
const surname = "Foo";

const result = concatenate(name, surname);
console.log(result); // prints Foo
```

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
