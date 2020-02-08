import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Day, { Props } from '../day'

const renderDay = (props: Partial<Props> = {}) => {
  return render(
    <Day
      blockClassName='example-block-class'
      date='2015-05-05'
      handleOnClick={() => {}}
      handleOnEnter={() => {}}
      isCurrentMonth={false}
      isDisabled={false}
      isHighlighted={false}
      isMonthNext={false}
      isMonthPrev={false}
      isNonSelectable={false}
      isSelectable={false}
      isSelected={false}
      isSelectionEnd={false}
      isSelectionStart={false}
      isToday={false}
      isWeekend={false}
      isWorkday={false}
      {...props}
    />,
  )
}
// TODO: remove me

test('default render', () => {
  const { container } = renderDay()

  expect(container.firstChild).toMatchSnapshot()
})

test('trigger callback on click', () => {
  const handleOnClick = jest.fn()
  const { getByRole } = renderDay({ handleOnClick })

  const button = getByRole('button')

  fireEvent.click(button)

  expect(handleOnClick).toBeCalled()
})

test('trigger callback on mouseenter', () => {
  const handleOnEnter = jest.fn()
  const { getByRole } = renderDay({ handleOnEnter })

  const button = getByRole('button')

  fireEvent.mouseEnter(button)

  expect(handleOnEnter).toBeCalled()
})

test('custom render', () => {
  const customRender = () => {
    return <button type='button'>Custom</button>
  }

  const { container } = renderDay({ customRender })

  expect(container.firstChild).toMatchSnapshot()
})

test('handle currentMonth', () => {
  const { container } = renderDay({ isCurrentMonth: true })

  expect(container.firstChild).toHaveClass('is-current_month')
})

test('handle isDisabled', () => {
  const { container } = renderDay({ isDisabled: true })

  expect(container.firstChild).toHaveClass('is-disabled')
})

test('handle isHighlighted', () => {
  const { container } = renderDay({ isHighlighted: true })

  expect(container.firstChild).toHaveClass('is-highlighted')
})

test('handle isMonthNext', () => {
  const { container } = renderDay({ isMonthNext: true })

  expect(container.firstChild).toHaveClass('is-next_month')
})

test('handle isMonthPrev', () => {
  const { container } = renderDay({ isMonthPrev: true })

  expect(container.firstChild).toHaveClass('is-prev_month')
})

test('handle isNonSelectable', () => {
  const { container } = renderDay({ isNonSelectable: true })

  expect(container.firstChild).toHaveClass('is-not_selectable')
})

test('handle isSelectable', () => {
  const { container } = renderDay({ isSelectable: true })

  expect(container.firstChild).toHaveClass('is-selectable')
})

test('handle isSelected', () => {
  const { container } = renderDay({ isSelected: true })

  expect(container.firstChild).toHaveClass('is-selected')
})

test('handle isSelectionEnd', () => {
  const { container } = renderDay({ isSelectionEnd: true })

  expect(container.firstChild).toHaveClass('is-end_selection')
})

test('handle isSelectionStart', () => {
  const { container } = renderDay({ isSelectionStart: true })

  expect(container.firstChild).toHaveClass('is-start_selection')
})

test('handle isToday', () => {
  const { container } = renderDay({ isToday: true })

  expect(container.firstChild).toHaveClass('is-today')
})

test('handle isWeekend', () => {
  const { container } = renderDay({ isWeekend: true })

  expect(container.firstChild).toHaveClass('is-weekend')
})

test('handle isWorkday', () => {
  const { container } = renderDay({ isWorkday: true })

  expect(container.firstChild).toHaveClass('is-working_day')
})
