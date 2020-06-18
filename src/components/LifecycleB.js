
import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Ning'
        }
        console.log('constructor_B')
    }
    
    static getDerivedStateFromProps(props, state){
        
        console.log('getDerivedStates_B')
        return null
    }

    componentDidMount(){
        console.log('componentDidMount_B')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdated_B')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate_B')
        return null
    }

    componentDidUpdate(){
        console.log('componentDidUpdate_B')
    }

 

    render() {
        console.log('render_B')
        return (
            <div>
                <div>Lifecycle B</div>
                
            </div>
        )
    }
}

export default LifecycleB
