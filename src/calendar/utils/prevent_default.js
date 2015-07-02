export default function preventDefault(func) {
  var that = this
  return function(e) {
    e.preventDefault()
    if (func) {
      func.call(that, e)
    }
  }
}
