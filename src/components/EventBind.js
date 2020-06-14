import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){

    //     if(this.state.message === "hello"){
    //         this.setState({message:'goodbye!'})
    //     }else{
    //         this.setState({message:'hello'})
    //     } 
    // }

    clickHandler = () => {
        if(this.state.message === "hello"){
            this.setState({message:'goodbye!'})
        }else{
            this.setState({message:'hello'})
        } 
    }
    

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click bind</button>
                {/* <button onClick={this.clickHandler.bind(this)}>Click bind</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click bind</button> */}
            </div>
        )
    }
}

export default EventBind
