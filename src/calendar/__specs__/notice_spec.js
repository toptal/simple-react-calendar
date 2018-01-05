import React from 'react'
import {shallow} from 'enzyme'
import assert from 'power-assert'
import Notice from '../notice'

describe('Notice', () => {
  it('renders div with a proper className', () => {
    const wrapper = shallow(<Notice type="overlapping_with_disabled" />)
    assert(wrapper.is('.calendar-notice'))
  })

  it('renders div with a custom block class name', () => {
    const wrapper = shallow(<Notice blockClassName="Whatever" type="overlapping_with_disabled" />)
    assert(!wrapper.is('.calendar-notice'))
    assert(wrapper.is('.Whatever-notice'))
  })

  describe('the message', () => {
    it('renders proper text for "overlapping_with_disabled" type', () => {
      const wrapper = shallow(<Notice type="overlapping_with_disabled" />)
      assert(wrapper.text().includes('Selected range must not overlap with disabled dates.'))
    })

    it('renders proper text for "disabled_day_click" type', () => {
      const wrapper = shallow(<Notice type="disabled_day_click" />)
      assert(wrapper.text().includes('Selected range must not overlap with disabled dates.'))
    })
  })
})
