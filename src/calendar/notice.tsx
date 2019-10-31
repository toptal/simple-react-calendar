import React, { Component } from 'react'

import { INoticeType } from '../@types'

export type Props = {
  blockClassName: string
  type: INoticeType
}

export default class Notice extends Component<Props, {}> {
  render() {
    const {blockClassName} = this.props

    return <div className={`${blockClassName}-notice`}>{this._renderMessage()}</div>
  }

  _renderMessage() {
    switch (this.props.type) {
      case 'overlapping_with_disabled':
      case 'disabled_day_click':
        return 'Selected range must not overlap with disabled dates.'
    }
  }
}
