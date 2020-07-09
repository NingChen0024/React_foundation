import React, { useState, useEffect } from 'react'
import HookMouse from './HookMouse'

function HookMouseContainer () {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display </button>
      {display && <HookMouse />}
      {/* display HookMouse only when display is true */}
    </div>
  )
}

export default HookMouseContainer
