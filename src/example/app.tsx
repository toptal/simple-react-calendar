import './style/base_style.styl'
import './style/date_picker.styl'

import * as Luxon from 'luxon'
import React, {Fragment} from 'react'

import SimpleReactCalendar from '../src'
import {CalendarTypeEnum} from '../src/types'

const currentTime: Luxon.DateTime = Luxon.DateTime.local()

export default function() {
  return (
    <Fragment>
      <SimpleReactCalendar
        blockClassName="date_picker"
        mode={CalendarTypeEnum.range}
        onSelect={({start, end}) => {
          console.log('>>>>>', {start: start.toISODate(), end: end.toISODate()})
        }}
        disabledIntervals={[{start: currentTime.minus({days: 10}), end: currentTime.minus({days: 5})}]}
      />
      <SimpleReactCalendar
        blockClassName="date_picker"
        minDate={currentTime.minus({days: 25})}
        maxDate={currentTime.plus({days: 5})}
        mode={CalendarTypeEnum.range}
        onSelect={({start, end}) => {
          console.log('>>>>>', {start: start.toISODate(), end: end.toISODate()})
        }}
      />
      <SimpleReactCalendar
        blockClassName="date_picker"
        mode={CalendarTypeEnum.range}
        onSelect={({start, end}) => {
          console.log('>>>>>', {start: start.toISODate(), end: end.toISODate()})
        }}
        highlighted={{start: currentTime.minus({days: 10}), end: currentTime.minus({days: 5})}}
      />
      <SimpleReactCalendar
        blockClassName="date_picker"
        mode={CalendarTypeEnum.range}
        onSelect={({start, end}) => {
          console.log('>>>>>', {start: start.toISODate(), end: end.toISODate()})
        }}
        selected={{start: currentTime.minus({days: 10}), end: currentTime.minus({days: 5})}}
      />
    </Fragment>
  )
}
