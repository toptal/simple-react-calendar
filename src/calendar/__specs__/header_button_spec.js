import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import {findDOMNode} from 'react-dom'
import assert from 'power-assert'

import HeaderButton from '../header_button'

describe('HeaderButton', () => {
  function render(props = {}) {
    const defaultProps = {
      type: 'prev',
      enabled: true,
      onClick: () => {}
    }
    return TestUtils.renderIntoDocument(
      <HeaderButton {...Object.assign({}, defaultProps, props)} />
    )
  }

  describe('enabled', () => {
    context('when enabled is true', () => {
      it("don't renders el with class name equal .is-disabled", () => {
        const el = findDOMNode(render({enabled: true}))
        assert(!el.classList.contains('is-disabled'))
      })
    })

    context('when enabled is false', () => {
      it('renders el with class name equal .is-disabled', () => {
        const el = findDOMNode(render({enabled: false}))
        assert(el.classList.contains('is-disabled'))
      })
    })
  })

  describe('type', () => {
    context('when type is "prev"', () => {
      it('renders day with class name equal .is-prev', () => {
        const el = findDOMNode(render({type: 'prev'}))
        assert(el.classList.contains('is-prev'))
      })
    })

    context('when type is "next"', () => {
      it('renders el with class name equal .is-next', () => {
        const el = findDOMNode(render({type: 'next'}))
        assert(el.classList.contains('is-next'))
      })
    })
  })

  describe('blockClassName', () => {
    context('when blockClassName is not defined', () => {
      it('renders el with .calendar-header_button', () => {
        const el = findDOMNode(render())
        assert(el.classList.contains('calendar-header_button'))
      })
    })

    context('when blockClassName is defined', () => {
      it('renders el with prefixed class name', () => {
        const el = findDOMNode(render({blockClassName: 'cal'}))
        assert(el.classList.contains('cal-header_button'))
      })
    })
  })
})
