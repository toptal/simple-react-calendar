import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const DayOfWeek = (props) => {
  const {blockClassName, isWeekend, day, customRender} = props

  const children = day

  if (customRender) {
    return customRender({
      ...props,
      children,
    })
  }

  return (
    <div
      className={classnames(`${blockClassName}-days_of_week_day`, {
        'is-weekend': isWeekend,
      })}
    >
      {children}
    </div>
  )
}

DayOfWeek.propTypes = {
  blockClassName: PropTypes.string,
  customRender: PropTypes.func,
  day: PropTypes.string.isRequired,
  isWeekend: PropTypes.bool.isRequired,
}

export default DayOfWeek
