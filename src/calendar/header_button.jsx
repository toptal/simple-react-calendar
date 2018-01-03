import React from 'react'

import PropTypes from 'prop-types'
import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'

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

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME,
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
