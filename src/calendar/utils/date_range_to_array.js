export default function dateRangeToArray(value) {
  let now = Date.now()

  if (_.isPlainObject(value)) {
    return [new Date(value.start || now), new Date(value.end || now)]
  } else if (_.isArray(value)) {
    return [new Date(value[0] || now), new Date(value[1] || now)]
  } else {
    return [new Date(), new Date()]
  }
}
