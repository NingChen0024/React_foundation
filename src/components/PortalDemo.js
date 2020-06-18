import React from 'react'
import ReactDOM from 'react-dom'


// used for modal
function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
            protal demo
        </div>,
        document.getElementById('portal-root')
    )
}
export default PortalDemo
