import { useState } from "react"
import TruePage from "./True"
import FalsePage from "./False"

const ComponentToggle = ()=>{

    const [status,setStatus] = useState(true)
  
    return(
        <>
        <h2>ComponentToggle</h2>
        {status?
        <TruePage/>:
        <FalsePage/>
    }
        
       
        </>
    )
}

export default ComponentToggle