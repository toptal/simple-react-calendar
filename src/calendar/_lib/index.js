import PropTypes from 'prop-types'

export const datePropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.instanceOf(Date)
])
