import { useEffect, useState } from "react"

const UseEffectTest =()=>{

    const [count,setCount] = useState()

    useEffect(()=>{
        console.log('Hello')
    },[count])

    return(
        <>
        <h2>UseEffect</h2>
        <h2>count :{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}

export default UseEffectTest