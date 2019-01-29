import classnames from 'classnames'
import * as Luxon from 'luxon'
import * as React from 'react'

export interface DayProps {
  blockClassName: string
  className: string
  date: Luxon.DateTime
  handleOnClick(event: React.MouseEvent<HTMLButtonElement>): void
  handleOnDisabledClick(event: React.MouseEvent<HTMLButtonElement>): void
  handleOnMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void
  isDisabled: boolean
}

const Day: React.SFC<DayProps> = ({
  date,
  className,
  blockClassName,
  handleOnClick,
  handleOnMouseEnter,
  handleOnDisabledClick,
  isDisabled,
}) => (
  <button
    className={classnames(className, `${blockClassName}-day`)}
    onClick={isDisabled ? handleOnDisabledClick : handleOnClick}
    onMouseEnter={handleOnMouseEnter}
    title={`Select ${date.toLocaleString(Luxon.DateTime.DATE_FULL)}`}
    value={date.toISODate()}
  >
    {date.day}
  </button>
)

export default Day
