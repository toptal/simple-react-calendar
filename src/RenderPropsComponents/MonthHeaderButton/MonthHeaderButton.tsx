import React, { FC, ReactElement } from 'react'
import classnames from 'classnames'

type Props = {
  children?: ReactElement
  blockClassName?: string
  isEnabled?: boolean
  onClick: () => void
  title?: string
  type: 'prev' | 'next'
  offset?: number
}

const displayName = 'MonthHeaderButton'

const HeaderButton: FC<Props> = ({
  children,
  blockClassName,
  isEnabled,
  type,
  title,
  onClick,
  offset = type === 'next' ? 1 : -1
}) => (
  <button
    className={classnames(`${blockClassName}-${displayName}`, `is-${type}`, {
      'is-disabled': !isEnabled
    })}
    type='button'
    disabled={!isEnabled}
    title={title}
    onClick={onClick}
    data-simple-react-calendar-button={offset}
  >
    {children}
  </button>
)

HeaderButton.displayName = displayName

export default HeaderButton
