import React, { Component } from 'react'

class RegularComp extends Component {
  render () {
    console.log('Regular')
    return (
      <div>
               regular {this.props.name}
      </div>
    )
  }
}

export default RegularComp
