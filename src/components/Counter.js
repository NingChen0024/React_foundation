import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increament(){
        // this.setState(
        //     {count: this.state.count + 1}, 
        //     () => console.log('Call back value ', this.state.count)
        // )

        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = {() => this.increament()}>Increament</button>
            </div>
        )
    }
}

export default Counter
