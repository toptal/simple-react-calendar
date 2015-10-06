import React from 'react'
import classnames from 'classnames'

import {BLOCK_CLASS_NAME} from './consts'

export default class HeaderButton extends React.Component {
  static propTypes = {
    blockClassName: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    offset: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired,
    type: React.PropTypes.oneOf(['prev', 'next']).isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  _onClick = (e) => {
    const {enabled, onClick} = this.props
    if (enabled) {
      onClick(e)
    }
  }

  render() {
    return (
      <a
        href='#'
        className={classnames(
          `${this.props.blockClassName}-header_button`,
          `is-${this.props.type}`,
          {
            'is-disabled': !this.props.enabled
          }
        )}
        onClick={this._onClick}
      />
    )
  }
}
