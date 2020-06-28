import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: ''
        }
    }

    inputHandler = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    
    render() {
        const {count, incrementCount,specifyIncreamentCount} = this.props
        return (
            <div>   
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.inputHandler}
                />
                <button onClick={incrementCount}> 
                   {this.props.name} Click {count} times
                </button>

                <button onClick={() => specifyIncreamentCount(this.state.input)}>
                    {this.props.name} Click {count} times
                </button>
            </div>
        )
    }
}

export default withCounter(ClickCounter,5)
