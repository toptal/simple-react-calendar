import {PropTypes} from 'react'

export const datePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.instanceOf(Date)
])
