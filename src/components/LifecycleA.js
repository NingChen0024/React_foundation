import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ning'
        }
        console.log('constructor_A')
    }
    
    static getDerivedStateFromProps(props, state){
        
        console.log('getDerivedStates_A')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount_A')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdated_A')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate_A')
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate_A')
    }

    changeState = () => {
        this.setState({
            name:'Not Ning'
        })
    }

    render() {
        console.log('render_A')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState}>changeState</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
