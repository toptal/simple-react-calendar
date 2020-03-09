import { render } from '@testing-library/react'
import React, { ComponentProps } from 'react'

import DayOfWeek from './DayOfWeek'

const renderDayOfWeek = (
  props: Partial<ComponentProps<typeof DayOfWeek>> = {}
) => {
  const baseProps = {
    blockClassName: 'example-class-name',
    day: '2015-12-12',
    isWeekend: true,
    ...props
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return render(<DayOfWeek {...baseProps} />)
}

test('default render', () => {
  const { container } = renderDayOfWeek()

  expect(container.firstChild).toMatchSnapshot()
})
