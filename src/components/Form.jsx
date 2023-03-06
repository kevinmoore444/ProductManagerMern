import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")


const handleSubmit = (e) => {
    // e.preventDefault()
    const productObj = {title, price, description}
    axios.post(`http://localhost:8000/api/products/new`, productObj)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log("This my post request error: ", err))
}




return (
    <div>
        <h1>Add a Product!</h1>
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
            <button className='btn btn-success' type='submit'>Add Product</button>
        </form>
    </div>
)
}

export default Form