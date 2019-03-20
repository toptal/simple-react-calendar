import './style/base_style.styl'
import './style/date_picker.styl'

import React from 'react'

import SimpleReactCalendar from '../calendar/calendar'

export default function() {
  return (
    <>
      <SimpleReactCalendar
        blockClassName="date_picker"
        onSelect={({start, end}) => {
          console.log('>>>>>', {start, end})
        }}
      />
    </>
  )
}
