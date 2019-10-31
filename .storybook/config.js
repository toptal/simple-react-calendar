import { configure } from '@storybook/react'

function loadStories() {
  require('../src/calendar/stories/index.jsx')
}

configure(loadStories, module)
