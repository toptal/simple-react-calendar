import formatDate from 'date-fns/format'

export const getISODate = (date: Date) => formatDate(date, 'YYYY-MM-DD')
export const getDayFormatted = (date: Date) => formatDate(date, 'D')
