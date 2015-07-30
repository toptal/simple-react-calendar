export default function preventDefault(func) {
  const that = this
  return function(e) {
    e.preventDefault()
    if (func) {
      func.call(that, e)
    }
  }
}
