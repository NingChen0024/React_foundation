import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greatHandler("child")}>{props.parent}</button>
        </div>
    )
}

export default ChildComponent
