import 'babel-polyfill'

var testsContext = require.context('./src', true, /_spec.js$/)
testsContext.keys().forEach(testsContext)

