import React, { useContext } from 'react'
import { userContext, userContextTwo } from '../App'

function ComponentF () {
  const valueOne = useContext(userContext)
  const valueTwo = useContext(userContextTwo)

  return (
    <div>

      {/* use a normal context method */}
      <userContext.Consumer>
        {
          value => {
            return (
              <userContextTwo.Consumer>
                {
                  valueTwo => {
                    return <h1>{value}, {valueTwo}</h1>
                  }
                }
              </userContextTwo.Consumer>
            )
          }
        }
      </userContext.Consumer>

      {/* Use the useContext hook */}
      <div>
        <h1>Hook value One - {valueOne}</h1>
        <h1>Hook value two - {valueTwo}</h1>
      </div>

    </div>
  )
}

export default ComponentF
