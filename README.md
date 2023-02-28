Concatenate
===========

| CI / CD | Status |
| ------- | ------ |
| NPM | TBD |
| Semaphore CI | TBD |
| Circle CI | TBD |
| Coverall | TBD |
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
