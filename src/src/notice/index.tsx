import * as React from 'react'

import {NoticeTypeEnum} from '../types'

export interface SimpleReactCalendarNoticeProps {
  blockClassName: string
  type: NoticeTypeEnum
}

export default class Notice extends React.PureComponent<SimpleReactCalendarNoticeProps> {
  private getErrorMessage() {
    switch (this.props.type) {
      case NoticeTypeEnum.overlap:
      case NoticeTypeEnum.disabled:
        return 'Selected range must not overlap with disabled dates.'
    }
  }

  render() {
    const {blockClassName} = this.props

    return <div className={`${blockClassName}-notice`}>{this.getErrorMessage()}</div>
  }
}
