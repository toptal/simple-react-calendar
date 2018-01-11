import React from 'react'

import HeaderButton from '../header_button'
import ReactTestRenderer from 'react-test-renderer'

describe('HeaderButton', () => {
  const defaultProps = {
    type: 'prev',
    enabled: true,
    onClick: () => {},
  }

  it('renders <HeaderButton />', () => {
    const tree = ReactTestRenderer.create(<HeaderButton {...defaultProps} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  context('when prop `enabled` is `false`', () => {
    it('renders <HeaderButton />', () => {
      const modProps = Object.assign(defaultProps, {enabled: false})
      const tree = ReactTestRenderer.create(<HeaderButton {...modProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  context('when prop `type` is "next"', () => {
    it('renders <HeaderButton />', () => {
      const modProps = Object.assign(defaultProps, {type: 'next'})
      const tree = ReactTestRenderer.create(<HeaderButton {...modProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  context('when prop `blockClassName` is defined', () => {
    it('renders <HeaderButton />', () => {
      const modProps = Object.assign(defaultProps, {blockClassName: 'cal'})
      const tree = ReactTestRenderer.create(<HeaderButton {...modProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  context('when prop `title` is defined', () => {
    it('renders <HeaderButton />', () => {
      const modProps = Object.assign(defaultProps, {title: 'testTitle'})
      const tree = ReactTestRenderer.create(<HeaderButton {...modProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  context('when prop `arrow` is defined', () => {
    it('renders <HeaderButton />', () => {
      const modProps = Object.assign(defaultProps, {arrow: <i className="icon">Test</i>})
      const tree = ReactTestRenderer.create(<HeaderButton {...modProps} />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
