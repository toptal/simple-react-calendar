# simple-react-calendar

A simple calendar component for React based applications.

A component that is easy to start using, yet flexible when you need customization.

## Usage

You can find a simple usage example in the included [index.html](./index.html) file.

Since a compiled version is included in the dist folder, if you clone the repo and open index.html
in your browser you will be able to try out the component. We encourage you to modify index.html to
play around with its various properties.

## Available component properties

All of the properties are optional, just rendering `<SimpleCalendar />` will already
give you a working calendar component.

* `activeMonth` - any day within the month that you want initially displayed
* `selectionMode` - one of either `range` or `single`
* `selectionBoundaries` - a range of dates to setup selection boundaries. Examples:
  - `{min: new Date()}`
  - `{min: new Date(), max: new Date(2016, 0, 1)}`
  - `{max: new Date(2016, 0, 1)}`
* `selected` - a range of dates to be initially selected, can be defined in various ways. Some examples:
  - `['2015-06-16', '2015-06-26']`
  - `[new Date(2015,5,16), new Date(2015,5,26)]`
  - `['2015-06-16']` - selects until today
  - `{start: '2015-06-16', end: '2015-06-26'}`
  - `{start: new Date(2015,5,16), end: new Date(2015,5,26)}`
  - `{start: '2015-06-16'}` - select until today
* `onActiveMonthChange` - a function that is called whenever user changes the month
* `onSelectionChange` - a function that is called whenever user finishes a new selection


