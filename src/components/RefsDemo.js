import React, { Component } from 'react'

// access DOM directly

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        
        this.inputRef = React.createRef()

        // this.cbRef = null
        // this.setCbRef = element => {
        //     this.cbRef = element
        // }
    }

    componentDidMount(){
        this.inputRef.current.focus()
        // if (this.cbRef){
        //     this.cbRef.focus()
        // }
    }

    focusInput = () => {
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
                <button onClick={this.focusInput}>Focus</button>
                {/* <input type='text' ref={this.setCbRef}/> */}
            </div>
        )
    }
}

export default RefsDemo
