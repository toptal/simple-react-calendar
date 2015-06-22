export default function preventDefault(func) {
  var that = this
  return function(e) {
    e.preventDefault()
    func && func.call(that, e)
  }
}
