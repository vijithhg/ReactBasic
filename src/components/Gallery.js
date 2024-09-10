import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Gallery=()=>{
    const[product,setProduct] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>setProduct(res.data))
        .catch((err)=>console.log(err))
    },[])

    console.log(product,'product')

    return(
        <div className="container">
            <div className="row justify-content-evenly">

           

            {product?.map((item)=>{
                return(
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item?.image} />
                <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>
                    {item?.description}
                    </Card.Text>
                </Card.Body>
            </Card>
                )
            })}

</div>
        </div>
    )
}

export default Gallery