import { render } from '@testing-library/react'
import React, { ComponentProps } from 'react'

import Notice from './Notice'

const renderNotice = (props: Partial<ComponentProps<typeof Notice>> = {}) =>
  render(<Notice {...props} />)

test('default render', () => {
  const { container } = renderNotice({ children: 'Example notice error', blockClassName: 'example-class-name' })

  expect(container).toMatchSnapshot()
})

describe('when no `children` defined', () => {
  test('renders null', () => {
    const { container } = renderNotice({ })

    expect(container).toMatchSnapshot()
  })
})
