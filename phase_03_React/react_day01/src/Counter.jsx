import { useState } from "react"

function Counter(){
    const [count,setCount]= useState(0)

    const handleInc=()=>{
        setCount(count+1)
        console.log(count)
    }
    const handleDec=()=>{
        setCount(count-1)
        console.log(count)
    }

    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        </>
    )
}
export default Counter