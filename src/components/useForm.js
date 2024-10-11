import { useRef } from "react"

const UseForm=()=>{

    const inputRef = useRef(null)
    const handleClick=()=>{
        inputRef.current.focus()
        console.log(inputRef.current.value)
    }
    return(
        <>
        <input type="text" placeholder="UserName" ref={inputRef}/>
        <button onClick={handleClick}>Focus on the input</button>
        </>
    )
}

export default UseForm