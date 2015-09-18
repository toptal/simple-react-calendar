import React from 'react'

export default class HeaderButton extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    enabled: React.PropTypes.bool,
    offset: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired
  }

  _onClick = (e) => {
    const {enabled, onClick} = this.props
    if (enabled) {
      onClick(e)
    }
  }

  render() {
    return (
      <a
        href='#'
        className={this.props.className}
        onClick={this._onClick}
      />
    )
  }
}
