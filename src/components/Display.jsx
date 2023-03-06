import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Display = () => {
  const[productList, setProductList] = useState([])
  const [deleteToggle, setDeleteToggle] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
    .then((res) => {
        console.log(res.data)
        setProductList(res.data)
    })
    .catch((err) => {console.log(err)})
}, [deleteToggle])

  const handleDelete = (e, id) => {
    axios.delete(`http://localhost:8000/api/product/delete/${id}`)
    .then((res) => {
      setDeleteToggle(!deleteToggle)
    })
    .catch((err) => {console.log(err)})
  }





  return (
    <div>
        <h1>Here are your Products!</h1>
        {
            productList.map((product, idx) => {
              return(
                <div key={idx}>
                  <Link to={`/productDetails/${product._id}`}>{product.title}</Link><br/>
                  <button className='btn btn-danger' onClick={(e) => {handleDelete(e, product._id)}}>Delete</button>
                </div>
              )
            })
        }
        
    </div>
  )
}

export default Display