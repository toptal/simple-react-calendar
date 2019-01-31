import cx from 'classnames'
import * as React from 'react'

import {MonthHeaderButtonTypeEnum} from '../types'

export interface MonthHeaderButtonProps {
  arrow: React.ReactNode
  blockClassName: string
  isDisabled?: boolean
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  title?: string
  type: MonthHeaderButtonTypeEnum
}

const MonthHeaderButton: React.SFC<MonthHeaderButtonProps> = ({
  arrow,
  blockClassName,
  isDisabled,
  type,
  title,
  onClick,
}) => (
  <button
    className={cx(
      `${blockClassName}-header_button`,
      `is-${type === MonthHeaderButtonTypeEnum.next ? 'next' : 'prev'}`,
      {
        'is-disabled': isDisabled,
      }
    )}
    type="button"
    disabled={isDisabled}
    title={title}
    onClick={onClick}
    value={type}
  >
    {arrow}
  </button>
)

export default MonthHeaderButton
