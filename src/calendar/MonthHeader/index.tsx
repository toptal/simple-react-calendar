import React, { FC, ReactElement } from 'react'

import {
  HandleOnMonthChange,
  RenderPropsMonthHeader,
  RenderPropsMonthHeaderButton
} from '../../@types'
import { getMonthNameFormatted } from '../../helper'

type Props = {
  activeMonth: Date
  blockClassName: string
  customRender: RenderPropsMonthHeader
  getMonthNameFormatted: typeof getMonthNameFormatted
  renderMonthHeaderButton: RenderPropsMonthHeaderButton
  onMonthChange: HandleOnMonthChange
}

const MonthHeader: FC<Props> = ({
  activeMonth,
  blockClassName,
  customRender,
  onMonthChange,
  getMonthNameFormatted,
  renderMonthHeaderButton
}) => {
  return customRender({
    monthTitle: getMonthNameFormatted(activeMonth),
    ComponentButtonPrev: () => < />,
    ComponentButtonNext: ,
  })
