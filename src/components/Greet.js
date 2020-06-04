import React, { Component } from 'react'

const Greet = props => {

    const {name, heroName} = props
    Console.log(props)
    return(
        <div>
            <h1>
                Hello {name} aka {heroName}
            </h1>
        </div>
    )
}

export default Greet