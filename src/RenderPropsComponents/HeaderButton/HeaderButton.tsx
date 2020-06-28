import React, { FC, ReactElement } from 'react'
import classnames from 'classnames'

export type Props = {
  arrow?: ReactElement
  blockClassName?: string
  enabled?: boolean
  offset?: number
  onClick: () => void
  title?: string
  type: 'prev' | 'next'
}

const HeaderButton: FC<Props> = ({
  arrow,
  blockClassName,
  enabled,
  type,
  title,
  onClick
}) => (
    <button
      className={classnames(`${blockClassName}-header_button`, `is-${type}`, {
        'is-disabled': !enabled
      })}
      type='button'
      disabled={!enabled}
      title={title}
      onClick={onClick}
    >
      {arrow}
    </button>
  )

export default HeaderButton
