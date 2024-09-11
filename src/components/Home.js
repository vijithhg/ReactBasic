import { useState } from "react"

const Home = ()=>{

    const [bgColor,setBgColor] = useState('bg-primary')

    const changeHandler = ()=>{
        if(bgColor==='bg-primary'){
            setBgColor('bg-secondary')
        }
        else if(bgColor==='bg-secondary'){
            setBgColor('bg-primary')
        }
        
    }
    return(
        <>
        <h2 className={bgColor}>HomePage</h2>
        <button onClick={changeHandler} className="btn btn-outline-success">Toggle Background</button>
        </>
    )
}

export default Home