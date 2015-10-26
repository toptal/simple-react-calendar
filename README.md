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
* `onSelect` - a function that is called whenever user
  selects a date (in `single` mode) or a dates range (`range` mode)
* `onSelectionProgress` - a function that is called whenever user changes
  selection. Works only in the `range` mode. When the function is passed then
  automatic range selection handing will be disabled.
* `blockClassName` - base class name that will be used as a class prefix (see [](#class-names))
* `minNumberOfWeeks` — minimum number of weeks in a month. Undefined by default.

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
          <li><code>.is-today</code> - when the date is current one</li>
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
  <tbody>
</table>
