import React from 'react'

import ReactTestRenderer from 'react-test-renderer'
import Notice from '../notice'

describe('Notice', () => {
  let tree

  context('when prop `type` is "overlapping_with_disabled"', () => {
    it('renders <Notice />', () => {
      tree = ReactTestRenderer.create(<Notice type="overlapping_with_disabled" />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    context('when prop `blockClassName` is "Whatever"', () => {
      it('renders div with a custom block class name', () => {
        tree = ReactTestRenderer.create(<Notice blockClassName="Whatever" type="overlapping_with_disabled" />).toJSON()

        expect(tree).toMatchSnapshot()
      })
    })
  })

  context('when prop `type` is "disabled_day_click"', () => {
    it('renders <Notice />', () => {
      tree = ReactTestRenderer.create(<Notice type="disabled_day_click" />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
