import '../../example/style/base_style.styl'
import '../../example/style/date_picker.styl'

import { action } from '@storybook/addon-actions'
import {
  boolean,
  date,
  number,
  object,
  text,
  withKnobs
} from '@storybook/addon-knobs/react'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Calendar from '../..'

const stories = storiesOf('Calendar', module)

const activeMonth = new Date('2018-01-01')
const styles = {
  display: 'flex',
  justifyContent: 'center',
  margin: '60px 0'
}
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>

stories
  .addDecorator(withKnobs)
  .addDecorator(CenterDecorator)
  .add('Interactive props example', () => {
    // disableDaysOfWeek
    const disableDaysOfWeek = boolean('disableDaysOfWeek', false)

    // disabledIntervals
    const disabledIntervals = object('disabledIntervals', [
      { end: new Date('2018-01-27'), start: new Date('2018-01-23') }
    ])

    // headerNextTitle
    const headerNextTitle = text('headerNextTitle', 'Next month')

    // headerPrevTitle
    const headerPrevTitle = text('headerPrevTitle', 'Previous month')

    // highlighted
    const highlightedLabel = 'Selected'
    const highlightedDefaultValue = {
      end: new Date('2018-01-05'),
      start: new Date('2018-01-03')
    }
    const highlighted = object(highlightedLabel, highlightedDefaultValue)

    // maxDate
    const maxDateLabel = 'maxDate'
    const maxDateDefaultValue = new Date('2018-03-01')
    const maxDate = date(maxDateLabel, maxDateDefaultValue)

    // minDate
    const minDateLabel = 'minDate'
    const minDateDefaultValue = new Date('2018-01-02')
    const minDate = date(minDateLabel, minDateDefaultValue)

    // minNumberOfWeeks
    const minNumberOfWeeksLabel = 'minNumberOfWeeks'
    const minNumberOfWeeksDefaultValue = 4
    const minNumberOfWeeks = number(
      minNumberOfWeeksLabel,
      minNumberOfWeeksDefaultValue
    )

    // rangeLimit
    const rangeLimitLabel = 'rangeLimit'
    const rangeLimitDefaultValue = 20
    const rangeLimit = number(rangeLimitLabel, rangeLimitDefaultValue)

    // Selected
    const selectedLabel = 'Selected'
    const selectedDefaultValue = {
      end: new Date('2018-01-12'),
      start: new Date('2018-01-08')
    }
    const selected = object(selectedLabel, selectedDefaultValue)

    // today
    const todayLabel = 'Today'
    const todayDefaultValue = new Date('2018-01-15')
    const today = date(todayLabel, todayDefaultValue)

    // weekStartsOn
    const weekStartsOnLabel = 'weekStartsOn'
    const weekStartsOnDefaultValue = 1
    const weekStartsOnOptions = {
      max: 6,
      min: 0,
      range: true,
      step: 1
    }
    const weekStartsOn = number(
      weekStartsOnLabel,
      weekStartsOnDefaultValue,
      weekStartsOnOptions
    )

    return (
      <Calendar
        mode='range'
        blockClassName='date_picker'
        activeMonth={activeMonth}
        disableDaysOfWeek={disableDaysOfWeek}
        disabledIntervals={disabledIntervals}
        headerNextTitle={headerNextTitle}
        headerPrevTitle={headerPrevTitle}
        highlighted={highlighted}
        maxDate={maxDate}
        minDate={minDate}
        minNumberOfWeeks={minNumberOfWeeks}
        rangeLimit={rangeLimit}
        selected={selected}
        today={today}
        weekStartsOn={weekStartsOn}
      />
    )
  })
  .add('Logging props call', () => (
    <Calendar
      mode='range'
      activeMonth={activeMonth}
      onDayHover={action('onDayHover')}
      onMonthChange={action('onMonthChange')}
      onSelect={action('onSelect')}
      onSelectionProgress={action('onSelectionProgress')}
    />
  ))
