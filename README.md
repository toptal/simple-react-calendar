# simple-react-calendar

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![BCH comliance][bch-image]][bch-url]

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

* * *

A simple calendar component for React based applications.

A component that is easy to start using, yet flexible when you need customization.

## Usage

You can find a simple usage example in the included [index.html](./index.html) file.

Since a compiled version is included in the dist folder, if you clone the repo and open index.html
in your browser you will be able to try out the component. We encourage you to modify index.html to
play around with its various properties.

## Available component properties

All of the properties are optional, just rendering `<Calendar />` will already
give you a working calendar component.

* `activeMonth` — any day within the month that you want initially displayed
* `blockClassName` — base class name that will be used as a class prefix (see [](#class-names))
* `disableDaysOfWeek` — disable rendering days of the week
* `headerNextArrow` — any kind of react element will be rendered into the next month button `(element)`
* `headerNextTitle` — text will be rendered as the title of the next month button `Next month`
* `headerPrevArrow` — any kind of react element will be rendered into the previous month button `(element)`
* `headerPrevTitle` — text will be rendered as the title of the previous month button, default is `Previous month`
* `maxDate` — latest date available for selection
* `minDate` — earliest date available for selection
* `minNumberOfWeeks` — minimum number of weeks in a month. Undefined by default.
* `mode` — selection mode, one of either `range` or `single`. Default is `single`
* `MonthHeaderComponent` — replace the month header of the component with this node `object` or `class function`
* `onMonthChange` — a function that is called whenever user changes the month. If defined then you have to handle month changing by yourself by changing `activeMonth` property
* `onSelect` — a function that is called whenever user
* `onSelectionProgress` - a function that is called whenever user changes
* `onDayHover` - a function that is called on mouseMove on days
* `rangeLimit` — limit number of days for selection (`number`)
* `selected` — selected dates. Can be ether single `Date` object if `mode` is `single`, or object `{start: Date(), end: Date()}` if `mode` is `range`
* `highlighted` — highlighted dates. Object `{start: Date(), end: Date()}`. Undefined by default
* `today` — current date (useful when you want to show current date in different time zone). Default is `new Date()`
  selects a date (in `single` mode) or a dates range (`range` mode)
  selection. Works only in the `range` mode. When the function is passed then
  automatic range selection handing will be disabled.
* `disabledIntervals` - disabled intervals of dates. Array of objects `[{start: Date(), end: Date()}]`.
  When user try to select disabled date or date range which consist disabled date(s) inside, `Notice` will appear.
* `weekStartsOn` - the index of the first day of the week (0 - Sunday). Default is 0.

## Class Names

simple-react-calendar follows BEM-like class naming approach and uses
single block name as a prefix. Default block class name is `calendar`, so
elements will have names like `calendar-day`, `calendar-month` etc.
Block class name can be overrided with `blockClassName` prop (see above).

<table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Default Class Name</th>
      <th>Modifier Class Names</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        Calendar (root element)
      </td>
      <td>
        <code>.calendar</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        Calendar month header
      </td>
      <td>
        <code>.calendar-month_header</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        Calendar month header title (month name)
      </td>
      <td>
        <code>.calendar-month_header_title</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        Calendar header button (month switcher)
      </td>
      <td>
        <code>.calendar-header_button</code>
      </td>
      <td>
        <ul>
          <li><code>.is-prev</code> - when is the previous month button</li>
          <li><code>.is-next</code> - when is the next month button</li>
          <li><code>.is-disabled</code> - when the button is disabled</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>
        Calendar week header (week days)
      </td>
      <td>
        <code>.calendar-days_of_week</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        Calendar week header day (week day)
      </td>
      <td>
        <code>.calendar-days_of_week_day</code>
      </td>
      <td>
        <ul>
          <li><code>.is-weekend</code> - when the day is the weekend</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>
        Calendar month (weeks wrapper element)
      </td>
      <td>
        <code>.calendar-month</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>
        Calendar week (days wrapper element)
      </td>
      <td>
        <code>.calendar-week</code>
      </td>
      <td>
      </td>
    </tr>

    <tr>
      <td>Calendar day</td>
      <td><code>.calendar-day</code></td>
      <td>
        <ul>
          <li><code>.is-selected</code> - when the date is selected</li>
          <li><code>.is-highlighted</code> - when the date is highlighted</li>
          <li><code>.is-today</code> - when the date is current one</li>
          <li><code>.is-start_selection</code> - when the date is start day of selection</li>
          <li><code>.is-end_selection</code> - when the date is end day of selection</li>
          <li><code>.is-current_month</code> - when the date belongs to the current month</li>
          <li><code>.is-prev_month</code> - when the date belongs to the previous month</li>
          <li><code>.is-next_month</code> - when the date belongs to the next month</li>
          <li><code>.is-weekend</code> - when the date is the weekend</li>
          <li><code>.is-working_day</code> - when the date is the working day</li>
          <li><code>.is-selectable</code> - when the date can be selected</li>
          <li><code>.is-not_selectable</code> - when the date can't be selected</li>
        </ul>
      </td>
    </tr>

    <tr>
      <td>
        Calendar notice (notice element)
      </td>
      <td>
        <code>.calendar-notice</code>
      </td>
      <td>
      </td>
    </tr>
  <tbody>
</table>
