import React from 'react'

const Greet = props => {
  const { name, heroName } = props
  console.log(props)
  return (
    <div>
      <h1>
                Hello {name} aka {heroName}
      </h1>
    </div>
  )
}

export default Greet
