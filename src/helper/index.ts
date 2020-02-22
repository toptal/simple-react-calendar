import formatDate from 'date-fns/format'

export type GetISODate = (date: Date) => string
export const getISODate = (date: Date) => formatDate(date, 'YYYY-MM-DD')

export type GetDayFormatted = (date: Date) => string
export const getDayFormatted = (date: Date) => formatDate(date, 'D')
