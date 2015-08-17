# simple-react-calendar

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

* `today` — current date (useful when you want to show current date in different time zone). Default is `new Date()`
* `activeMonth` - any day within the month that you want initially displayed
* `mode` - selection mode, one of either `range` or `single`. Default is `single`
* `minDate` — earliest date available for selection
* `maxDate` — latest date available for selection
* `selected` - selected dates. Can be ether single `Date` object if `mode` is `single`, or object `{start: Date(), end: Date()}` if `mode` is `range`
* `onMonthChange` - a function that is called whenever user changes the month. If defined then you have to handle month changing by yourself by changing `activeMonth` property
* `onSelect` - a function that is called whenever user changes selection
