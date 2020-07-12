import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 10
}// set an object as the state

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}// define actions and set states

function UseRenderCounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>CountOne - {count.firstCounter} CountTwo - {count.secondCounter} </div>
      <button onClick={() => dispatch({ type: 'increment' , value: 1})}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' , value: 1})}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment2' , value: 5})}>Increment Five</button>
      <button onClick={() => dispatch({ type: 'decrement2' , value: 5})}>Decrement Five</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default UseRenderCounterTwo
