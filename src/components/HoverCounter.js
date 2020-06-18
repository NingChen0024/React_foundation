import React, { Component } from 'react'

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementHandler = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        const {count} = this.state
        console.log(count)
        return (
            <div>
                <h2 onMouseOver={this.incrementHandler}>Hover {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter
