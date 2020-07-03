import React ,{useState, useEffect}from 'react'

function HookCounterFive() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('12')

    useEffect(() =>{
        console.log("useEffect - updating document")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default HookCounterFive
