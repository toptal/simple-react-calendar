import lodash from 'lodash'

/**
 * It takes one of the following:
 *  - an object with 'start' and/or 'end' properties with dates
 *  - an array with 1 or 2 dates
 *  - nothing
 *
 * In all the cases it returns an array with two values that are Date object
 * representing start and end of a range. In cases where either start or end
 * end is missing it defaults to current Date.
 *
 * @param {object|array|undefined} value
 * @returns {array}
 */
export default function dateRangeToArray(value) {
  const now = new Date()

  if (lodash.isPlainObject(value)) {
    return [new Date(value.start || now), new Date(value.end || now)]
  } else if (Array.isArray(value)) {
    return [new Date(value[0] || now), new Date(value[1] || now)]
  } else {
    return [now, now]
  }
}
