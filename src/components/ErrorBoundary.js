import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hassError:'false'
        }
    }

    static getDerivedStateFromError(error){
        return{
            hassError: true
        }
    }

    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }
    
    render() {
       if(this.state.hassError){
           return <h1>There is an error</h1>
       }
       return this.props.children
    }
}

export default ErrorBoundary
