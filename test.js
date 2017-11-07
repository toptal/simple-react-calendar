import 'babel-polyfill'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const testsContext = require.context('./src', true, /_spec.js$/)
testsContext.keys().forEach(testsContext)

Enzyme.configure({adapter: new Adapter()})