import React, { Component, PureComponent } from 'react'
import ChildComponent from './ChildComponent'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      parentName: 'parent',
      name: 'Ning'
    }
    this.greatParent = this.greatParent.bind(this)
  }

  greatParent (childName) {
    if (this.state.parentName === 'parent') {
      this.setState({ parentName: 'Parent' })
    } else {
      this.setState({ parentName: 'parent' })
    }
    alert(`hello ${this.state.parentName} from ${childName}`)
  }

  componentDidMount () {
    setInterval(() => {
      // this.state.name === 'Ning' ? (
      //     this.setState({name:'ning'})
      // ):(
      //     this.setState({name:'Ning'})
      // )

      this.setState({ name: 'Ning' })
    }, 2000)
  }

  render () {
    console.log('*****************Parent***************')
    return (
      <div>
        <p>ParentComponent</p>
        <ChildComponent greatHandler={this.greatParent} parent={this.state.parentName} />
        {/* <RegularComp name = {this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name} />

      </div>
    )
  }
}

export default ParentComponent
