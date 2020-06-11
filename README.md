# simple-react-calendar <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![NPM version][npm-image]][npm-url]
[![deps][deps]][deps-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![CodeFactor][cf-image]][cf-url]
[![codecov.io][codecov-image]][codecov-url]
[![styled with prettier][prettier-image]][prettier-url]
[![Tested with Jest][jest-image]][jest-url]
[![storybook provided][storybook-image]][storybook-url]
[![semantic-release][semantic-image]][semantic-url]

[![npm badge][npm-badge-png]][package-url]

---

A simple calendar component for React based applications.

A component that is easy to start using, yet flexible when you need customization.

## Usage

You can find the component's online demo [here](https://toptal.github.io/simple-react-calendar).

## Screen

![Alt text](./simple_react_calendar.png?raw=true 'Simple React Calendar')

### Install

#### Using npm

```bash
npm install simple-react-calendar
```

#### Using yarn

```bash
yarn add simple-react-calendar
```

### Usage

```js
import React, { Component } from 'react'

import SimpleReactCalendar from 'simple-react-calendar'

class MyApp extends Component {
  render() {
    return <SimpleReactCalendar activeMonth={new Date()} />
  }
}
```

## Available component properties

All of the properties are optional, just rendering `<Calendar />` will already give you a working calendar component.

| Properties             | PropType                                     | Description                                                                                                                                                                                                                                                                                                |
| ---------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MonthHeaderComponent` | `object` or `func`                           | replace the month header of the component with this node `object` or `class function`                                                                                                                                                                                                                      |
| `activeMonth`          | `datePropType`\*                             | any day within the month that you want initially displayed                                                                                                                                                                                                                                                 |
| `blockClassName`       | `string`                                     | base class name that will be used as a class prefix (see [](#class-names))                                                                                                                                                                                                                                 |
| `daysOfWeek`           | `[string]`                                   | array of string represents the days                                                                                                                                                                                                                                                                        |
| `disableDaysOfWeek`    | `bool`                                       | disable rendering days of the week                                                                                                                                                                                                                                                                         |
| `disabledIntervals`    | `[{start: datePropType, end: datePropType}]` | disabled intervals of dates. Array of objects `[{start: Date(), end: Date()}]`. When user try to select disabled date or date range which consist disabled date(s) inside, `Notice` will appear                                                                                                            |
| `headerNextArrow`      | `element`                                    | any kind of react element will be rendered into the next month button `(element)`                                                                                                                                                                                                                          |
| `headerNextTitle`      | `string`                                     | text will be rendered as the title of the next month button `Next month`                                                                                                                                                                                                                                   |
| `headerPrevArrow`      | `element`                                    | any kind of react element will be rendered into the previous month button `(element)`                                                                                                                                                                                                                      |
| `headerPrevTitle`      | `string`                                     | text will be rendered as the title of the previous month button, default is `Previous month`                                                                                                                                                                                                               |
| `highlighted`          | `{start: datePropType, end: datePropType}`   | highlighted dates. Object `{start: Date(), end: Date()}`. Undefined by default                                                                                                                                                                                                                             |
| `maxDate`              | `datePropType`\*                             | latest date available for selection                                                                                                                                                                                                                                                                        |
| `minDate`              | `datePropType`\*                             | earliest date available for selection                                                                                                                                                                                                                                                                      |
| `minNumberOfWeeks`     | `number`                                     | minimum number of weeks in a month. Undefined by default                                                                                                                                                                                                                                                   |
| `mode`                 | `string` one of `range` or `single`          | selection mode, one of either `range` or `single`. Default is `single`                                                                                                                                                                                                                                     |
| `onDayHover`           | `func`                                       | a function that is called on mouseMove on days                                                                                                                                                                                                                                                             |
| `onMonthChange`        | `func`                                       | a function that is called whenever user changes the month. If defined then you have to handle month changing by yourself by changing `activeMonth` property                                                                                                                                                |
| `onSelect`             | `func`                                       | a function that is called whenever user                                                                                                                                                                                                                                                                    |
| `onSelectionProgress`  | `func`                                       | a function that is called whenever user changes                                                                                                                                                                                                                                                            |
| `rangeLimit`           | `number`                                     | limit number of days for selection (`number`)                                                                                                                                                                                                                                                              |
| `selected`             |                                              | selected dates. Can be ether single `Date` object if `mode` is `single`, or object `{start: Date(), end: Date()}` if `mode` is `range`                                                                                                                                                                     |
| `today`                | `datePropType`\*                             | current date (useful when you want to show current date in different time zone). Default is `new Date()` selects a date (in `single` mode) or a dates range (`range` mode) selection. Works only in the `range` mode. When the function is passed then automatic range selection handing will be disabled. |
| `weekStartsOn`         | `number`                                     | the index of the first day of the week (0 - Sunday). Default is 1 - Monday                                                                                                                                                                                                                                 |

`datePropType` - `number`, `string` or `instanceOf(Date)`

## Render Prop's Components

You can easily override any rendered part of the calendar by providing the proper render function as a Prop.

| Render Prop name  | Default usage                         | Default Render Prop Component                                                                        |
| ----------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `renderDay`       | `(props) => <Day {...props} />`       | [RenderPropsComponents/Day/Day.tsx](./src/RenderPropsComponents/Day/Day.tsx)                         |
| `renderDayOfWeek` | `(props) => <DayOfWeek {...props} />` | [RenderPropsComponents/DayOfWeek/DayOfWeek.tsx](./src/RenderPropsComponents/DayOfWeek/DayOfWeek.tsx) |
| `renderNotice`    | `(props) => <Notice {...props} />`    | [RenderPropsComponents/Notice/Notice.tsx](./src/RenderPropsComponents/Notice/Notice.tsx)             |

## Expose date helper methods

You can easily override any helper methods, all of them exposed as pure functions.

| Helper function    | Default function                              |
| ------------------ | --------------------------------------------- |
| `getDayFormatted`  | [getDayFormatted](./src/helper/index.ts#L4)   |
| `getISODate`       | [getISODate](./src/helper/index.ts#L3)        |
| `getNoticeContent` | [getNoticeContent](./src/helper/index.ts#L10) |

## Class Names

`simple-react-calendar` follows BEM-like class naming approach and uses
single block name as a prefix. Default block class name is `calendar`, so
elements will have names like `calendar-day`, `calendar-month` etc.

Block class name can be overrided with `blockClassName` prop (see above).

| Description                              | Default Class Name             | Modifier Class Names                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Calendar (root element)                  | `.calendar`                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar month header                    | `.calendar-month_header`       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar month header title (month name) | `.calendar-month_header_title` |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar header button (month switcher)  | `.calendar-header_button`      | <ul><li><code>.is-prev</code> - when is the previous month button</li><li><code>.is-next</code> - when is the next month button</li><li><code>.is-disabled</code> - when the button is disabled</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Calendar week header (week days)         | `.calendar-days_of_week`       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar week header day (week day)      | `.calendar-days_of_week_day`   | <ul><li><code>.is-weekend</code> - when the day is the weekend</li></ul>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Calendar month (weeks wrapper element)   | `.calendar-month`              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar week (days wrapper element)     | `.calendar-week`               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Calendar day                             | `.calendar-day`                | <ul><li><code>.is-selected</code> - when the date is selected</li><li><code>.is-highlighted</code> - when the date is highlighted</li><li><code>.is-today</code> - when the date is current one</li><li><code>.is-start_selection</code> - when the date is start day of selection</li><li><code>.is-end_selection</code> - when the date is end day of selection</li><li><code>.is-current_month</code> - when the date belongs to the current month</li><li><code>.is-prev_month</code> - when the date belongs to the previous month</li><li><code>.is-next_month</code> - when the date belongs to the next month</li><li><code>.is-weekend</code> - when the date is the weekend</li><li><code>.is-working_day</code> - when the date is the working day</li><li><code>.is-selectable</code> - when the date can be selected</li><li><code>.is-not_selectable</code> - when the date can't be selected</li></ul> |
| Calendar notice (notice element)         | `.calendar-notice`             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### Local development environment

Fork this repository and clone your version of the repository

Install dependencies

```bash
  yarn
```

Start example server locally

```bash
  yarn start
```

You now have examples running on http://localhost:9000

### Local StoryBook

Fork this repository and clone your version of the repository

Install dependencies

```bash
  yarn
```

Start example server locally

```bash
  yarn storybook
```

You now have examples running on http://localhost:6006

[npm-badge-png]: https://nodei.co/npm/simple-react-calendar.png?downloads=true&downloadRank=true&stars=true
[npm-version-svg]: http://versionbadg.es/toptal/simple-react-calendar.svg
[deps]: https://david-dm.org/toptal/simple-react-calendar.svg
[deps-url]: https://david-dm.org/toptal/simple-react-calendar
[package-url]: https://npmjs.org/package/simple-react-calendar
[npm-image]: http://img.shields.io/npm/v/simple-react-calendar.svg
[npm-url]: http://npmjs.org/package/simple-react-calendar
[travis-image]: https://travis-ci.org/toptal/simple-react-calendar.svg?branch=master
[travis-url]: https://travis-ci.org/toptal/simple-react-calendar?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/simple-react-calendar.svg
[download-url]: https://npmjs.org/package/simple-react-calendar
[cf-image]: https://www.codefactor.io/repository/github/toptal/simple-react-calendar/badge
[cf-url]: https://www.codefactor.io/repository/github/toptal/simple-react-calendar
[prettier-image]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg
[prettier-url]: https://github.com/prettier/prettier
[jest-image]: https://img.shields.io/badge/tested_with-Jest-%2399424f.svg
[jest-url]: https://facebook.github.io/jest/
[codecov-image]: https://codecov.io/gh/toptal/simple-react-calendar/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/toptal/simple-react-calendar
[storybook-image]: https://img.shields.io/badge/storybook-provided-f1618c.svg
[storybook-url]: https://storybook.js.org/
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
