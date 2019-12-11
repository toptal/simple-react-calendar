import React, { FC } from 'react'

import { INoticeType } from '../../@types'

export interface Props {
  blockClassName: string
  type: INoticeType
}

const Notice: FC<Props> = ({type, blockClassName}) => {
  const content =
    type === 'overlapping_with_disabled' ||
    (type === 'disabled_day_click' && 'Selected range must not overlap with disabled dates.')

  return <div className={`${blockClassName}-notice`}>{content}</div>
}

Notice.displayName = 'Notice'

export default Notice
