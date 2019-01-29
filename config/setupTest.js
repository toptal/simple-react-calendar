import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MockDate from 'mockdate'

Enzyme.configure({adapter: new Adapter()})

// Global mock date
MockDate.set('1/1/2000', 120)
