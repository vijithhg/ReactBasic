import { useContext } from "react"
import { NameContext } from "../App"

const D = ()=>{
    const {name} = useContext(NameContext)
    return(
        <>
             <h3>component D</h3>
             <h3>Hello {name}</h3>
        </>
    )
}

export default D