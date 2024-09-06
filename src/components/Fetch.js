import { useEffect, useState } from "react"

const Fetch = ()=>{

    const[userData,setUserData] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setUserData(json))
    },[])

    console.log(userData,'userData')

    return(
        <>
        <h2>Using Fetch Method</h2>
        {userData?.map((user)=>{
            return(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.email}</h2>
                </div>
            )
        })}
        </>
    )
}
export default Fetch