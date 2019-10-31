import React, { FC } from 'react'

import { INoticeType } from '../@types'

export type Props = {
  blockClassName: string
  type: INoticeType
}

interface IGetNoticeMessage {
  type: INoticeType
}

const getNoticeMessage = ({ type }: IGetNoticeMessage) => {
  switch (type) {
    case 'overlapping_with_disabled':
    case 'disabled_day_click':
      return 'Selected range must not overlap with disabled dates.'
  }
}

const Notice: FC<Props> = ({ blockClassName, type }) => {
  const message = getNoticeMessage({ type })

  return <div className={`${blockClassName}-notice`}>{message}</div>
}

Notice.displayName = 'Notice'

export default Notice
