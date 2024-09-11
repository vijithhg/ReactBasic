import { useState } from "react"

const BgChange = ()=>{

    const [bgColorStatus,setBgColorStaus] = useState(true)
    return(
        <>
        <h2 className={bgColorStatus?'bg-primary':'bg-secondary'}>HomePage</h2>
        <h2>You Are {bgColorStatus?'Right':'Wrong'}</h2>
        <button onClick={()=>setBgColorStaus(!bgColorStatus)} className="btn btn-outline-success">Toggle Background</button>
        </>
    )
}

export default BgChange