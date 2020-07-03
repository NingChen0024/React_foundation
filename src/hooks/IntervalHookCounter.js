import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)
    const [someProp, setSomeProp] = useState("some prop")

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {

        function doSomething(){
            console.log(someProp)
        }//define function in useEffect

        const interval = setInterval(tick, 1000)

        doSomething(someProp)

        return () => {
            clearInterval(interval)
        }//clean up
        
    }, [someProp])
    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
