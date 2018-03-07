import {configure} from '@storybook/react'

function loadStories() {
  require('../src/calendar/stories/index.js')
}

configure(loadStories, module)
