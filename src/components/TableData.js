import axios from "axios"
import { useEffect, useState } from "react"

const TableData = ()=>{

    const[data,setData]=useState([])
    
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    // },[])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])

    console.log(data,'data')
    return(
        <div className="container">
        <table className="table table-striped text-center">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((post)=>{
                    return(
                        <tr key={post?.id}>
                            <td>{post?.userId}</td>
                            <td>{post?.title}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
    )
}

export default TableData