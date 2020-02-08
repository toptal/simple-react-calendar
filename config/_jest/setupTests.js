import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'
import MockDate from 'mockdate'

Enzyme.configure({ adapter: new Adapter() })

// Global mock date
MockDate.set('1/1/2000', 120)
