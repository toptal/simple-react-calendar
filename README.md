# SimpleReactCalendar <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![NPM version][npm-image]][npm-url]
[![written in TypeScript][typescript-image]][typescript-url]
[![styled with prettier][prettier-image]][prettier-url]
[![tested with Jest][jest-image]][jest-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![BCH compliance][bch-image]][bch-url]
[![CodeFactor][cf-image]][cf-url]
[![codecov.io][codecov-image]][codecov-url]
[![Doczrc provided][doczrc-image]][doczrc-url]

[![npm badge][npm-badge-png]][package-url]

---

A simple calendar component for React based applications.
A component that is easy to start using, yet flexible when you need customization.

## Screen

![Alt text](./simple_react_calendar.png?raw=true 'Simple React Calendar')

### Usage

```js
import React, {Component} from 'react'

import SimpleReactCalendar from 'simple-react-calendar'

class MyApp extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}
```

#### 📚 [API Docs with live preview available here.](https://simplereactcalendar.debuggable.io)

## Github

Take a look at [the code here](https://github.com/toptal/simple-react-calendar).

## Contribute

### Preparing dev environment

- `yarn install` to install dev dependencies

### Running and building the library

- `yarn start` will start the dev server and expose the sample app
- `yarn build` will output the build artifact to `./lib` folder

### Docs

- `docz:dev` will start the docz developement server
- `docz:build` will build the docs

## License

MIT

[npm-badge-png]: https://nodei.co/npm/simple-react-calendar.png?downloads=true&downloadRank=true&stars=true
[npm-version-svg]: http://versionbadg.es/toptal/simple-react-calendar.svg
[package-url]: https://npmjs.org/package/simple-react-calendar
[npm-image]: http://img.shields.io/npm/v/simple-react-calendar.svg
[npm-url]: http://npmjs.org/package/simple-react-calendar
[travis-image]: https://travis-ci.org/toptal/simple-react-calendar.svg?branch=master
[travis-url]: https://travis-ci.org/toptal/simple-react-calendar?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/simple-react-calendar.svg
[download-url]: https://npmjs.org/package/simple-react-calendar
[bch-image]: https://bettercodehub.com/edge/badge/toptal/simple-react-calendar?branch=master
[bch-url]: https://bettercodehub.com/
[cf-image]: https://www.codefactor.io/repository/github/toptal/simple-react-calendar/badge
[cf-url]: https://www.codefactor.io/repository/github/toptal/simple-react-calendar
[prettier-image]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[jest-image]: https://img.shields.io/badge/Tested_with-Jest-%2399424f.svg
[jest-url]: https://facebook.github.io/jest/
[codecov-image]: https://codecov.io/gh/toptal/simple-react-calendar/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/toptal/simple-react-calendar
[doczrc-image]: https://img.shields.io/badge/doczrc-provided-f1618c.svg
[doczrc-url]: https://www.docz.site/
[typescript-image]: https://img.shields.io/badge/written_in-TypeScript-294E80.svg
[typescript-url]: https://www.typescriptlang.org/
