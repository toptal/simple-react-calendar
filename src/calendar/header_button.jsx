import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default class HeaderButton extends React.Component {
  static propTypes = {
    arrow: PropTypes.element,
    blockClassName: PropTypes.string,
    enabled: PropTypes.bool,
    offset: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string,
    type: PropTypes.oneOf(['prev', 'next']).isRequired,
  }

  render() {
    const {arrow, blockClassName, enabled, type, title, onClick} = this.props

    return (
      <button
        className={classnames(`${blockClassName}-header_button`, `is-${type}`, {
          'is-disabled': !enabled,
        })}
        type="button"
        disabled={!enabled}
        title={title}
        onClick={onClick}
      >
        {arrow}
      </button>
    )
  }
}
