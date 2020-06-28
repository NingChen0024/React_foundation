import React, { Component } from 'react'
import UserContext, { UserConsumer } from './userContext'

class ComponentC extends Component {


    static contextType = UserContext
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        value => {
                        return <div>Component value :{value}</div>
                        }
                    }
                </UserConsumer>
                <div>
                    component C context {this.context}
                </div>
            </div>
        )
    }
}


// ComponentC.contextType = UserContext
export default ComponentC
