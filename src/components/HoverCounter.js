import React, { Component } from 'react'
import withCounter from './WithCounter'

class HoverCounter extends Component {
  render () {
    const { count, incrementCount, name } = this.props

    return (
      <div>
        <h2 onMouseOver={incrementCount}>{name} Hover {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 5)
