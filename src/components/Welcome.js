import React, { Component } from 'react'

class Welcome extends Component {

    render() {

        const {name, heroName} = this.props
        //const {name, hero} = this.state
        return (
            <div>
                <h1>
                    welcome {name} aka {heroName}
                </h1>
            </div>
        )
    }
}

export default Welcome
