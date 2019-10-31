import './style/base_style.styl'
import './style/date_picker.styl'

import React, { FC } from 'react'

import SimpleReactCalendar from '../calendar/calendar'

const App: FC = () => (
  <SimpleReactCalendar
    blockClassName='date_picker'
    onSelect={({ start, end }) => {
      /* eslint-disable no-console */
      console.log('>>>>>', { start, end })
    }}
  />
)

App.displayName = 'App'

export default App
