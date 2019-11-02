import classnames from 'classnames'
import React, { FC, SyntheticEvent } from 'react'

import { IMonthHeaderButtonRenderProps } from '../../@types'

type Props = {
  blockClassName: string
  customRender?: IMonthHeaderButtonRenderProps
  enabled?: boolean
  onClick: (event: SyntheticEvent<HTMLElement>) => void
  type: 'prev' | 'next'
}

const MonthHeaderButton: FC<Props> = (props) => {
  const {blockClassName, enabled, type, onClick, customRender} = props

  if (customRender) {
    return customRender(props)
  }

  const isNext = type === 'next'

  return (
    <button
      className={classnames(`${blockClassName}-header_button`, `is-${type}`, {
        'is-disabled': !enabled,
      })}
      data-calendar-value={isNext ? 1 : -1}
      disabled={!enabled}
      onClick={onClick}
      title={isNext ? 'Next Month' : 'Previous Month'}
      type="button"
    >
      {isNext ? '<' : '>'}
    </button>
  )
}

MonthHeaderButton.displayName = 'MonthHeaderButton'

export default MonthHeaderButton
