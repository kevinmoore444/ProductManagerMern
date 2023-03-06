import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'


const Details = () => {

    const [product, setProduct] = useState("")
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.log('This is our detail page: ' + err))
    }, [id])

// Why are we passing id into dependency array?

  return (
    <div>
        <h1>Product Details</h1>
        <p>{product.title}</p>
        <p>Price: ${product.price} </p>
        <p>Description: {product.description}</p>
        <button className='btn btn-success'><Link to={`/updateProduct/${product._id}`}>Update Product</Link></button>
    </div>
  )
}

export default Details