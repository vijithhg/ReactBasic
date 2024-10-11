import { useContext } from "react"
import { NameContext } from "../App"

const E = ()=>{

    const {name} = useContext(NameContext)
    return(
        <>
             <h3>component E</h3>
             <h4>Hello {name}</h4>
        </>
    )
}

export default E