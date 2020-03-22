import formatDate from 'date-fns/format'

export type NoticeMessageType =
  | 'overlapping_with_disabled'
  | 'disabled_day_click'
  | null

export const getISODate = (date: Date) => formatDate(date, 'YYYY-MM-DD')
export const getDayFormatted = (date: Date) => formatDate(date, 'D')
export const getNoticeContent = (type: NoticeMessageType) => {
  switch (type) {
    case 'overlapping_with_disabled':
    case 'disabled_day_click':
      return 'Selected range must not overlap with disabled dates.'

    default:
      return null
  }
}
