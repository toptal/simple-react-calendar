import React from 'react'
import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'

export default class HeaderButton extends React.Component {
  static propTypes = {
    arrow: React.PropTypes.element,
    blockClassName: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    offset: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired,
    title: React.PropTypes.string,
    type: React.PropTypes.oneOf(['prev', 'next']).isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  _onClick(e) {
    const {enabled, onClick} = this.props
    if (enabled) {
      onClick(e)
    }
  }

  render() {
    const {arrow, blockClassName, enabled, type, title} = this.props

    return (
      <button
        className={classnames(
          `${blockClassName}-header_button`,
          `is-${type}`,
          {
            'is-disabled': !enabled
          }
        )}
        disabled={!enabled}
        title={title}
        onClick={this._onClick.bind(this)}
        >
        {arrow}
      </button>
    )
  }
}
