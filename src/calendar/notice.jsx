import React from 'react'
import PropTypes from 'prop-types'

import {BLOCK_CLASS_NAME} from './consts'

export default class Notice extends React.Component {
  static propTypes = {
    blockClassName: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
      'overlapping_with_disabled',
      'disabled_day_click'
    ]).isRequired
  }

  static defaultProps = {
    blockClassName: BLOCK_CLASS_NAME
  }

  render() {
    const {blockClassName} = this.props
    return (
      <div className={`${blockClassName}-notice`}>
        {this._renderMessage()}
      </div>
    )
  }

  _renderMessage() {
    switch (this.props.type) {
      case 'overlapping_with_disabled':
      case 'disabled_day_click':
        return 'Selected range must not overlap with disabled dates.'
    }
  }
}
