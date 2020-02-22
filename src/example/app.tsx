import './style/base_style.styl'
import './style/date_picker.styl'

import React, { FC } from 'react'

import SimpleReactCalendar from '../calendar/calendar'

const App: FC = () => (
  <SimpleReactCalendar
    mode='range'
    blockClassName='date_picker'
    onSelect={({ start, end }) => {
      /* eslint-disable no-console */
      console.log('>>>>>', { end, start })
    }}
  />
)

App.displayName = 'App'

export default App
