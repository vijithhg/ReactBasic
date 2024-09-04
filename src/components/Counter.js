import { useState } from "react"

const Counter = ()=>{
    const[count,setCount]=useState(0)

    const incrementHandler = ()=>{
        setCount(count+1)
    }

    const decrementHandler=()=>{
        setCount(count-1)
    }
    const resetHandler = ()=>{
        setCount(0)
    }
   
    return(
        <>
            <h2>Counter</h2>

            <h2>Count : {count}</h2>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>

            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>

        </>
    )
}

export default Counter