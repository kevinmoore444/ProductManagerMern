import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate} from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
        .then((res) => {
            console.log("This is my update get request: " + res.data)
            const product = res.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch(err => console.log("This my update request error: ", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj ={title, price, description}
        axios.put(`http://localhost:8000/api/product/${id}`, putObj)
        .then((res) => {
            navigate("/")
        })
        .catch(err => console.log("This my put request error: ", err))
    }



  return (
    <div>
         <h1>Update</h1>
        <form onSubmit={handleSubmit}>
            <div> 
                <label>Title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" value={title}/>
            </div>
            <div> 
                <label>Price</label>
                <input onChange={(e) => setPrice(e.target.value)} type="number" value={price}/>
            </div>
            <div> 
                <label>Description</label>
                <input onChange={(e) => setDescription(e.target.value)} type="text" value={description}/>
            </div>
            <button type='submit'>Add Product</button>
        </form>
    </div>
  )
}

export default Update