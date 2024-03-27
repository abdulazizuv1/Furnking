import React from 'react'
import "./Product.css"
import { useParams } from 'react-router-dom';

function Product({data, addToCart}) {
  const {id} = useParams()
  const product = data.filter((item)=>{
    return item.id == id
  })
  console.log(product[0]);
  return (
    <div className="container">
      <div className="product">
      <div className="product_imgs">  
          <img src={product[0].img} alt="" />
      </div>
      <div className="product_info">
        <h1>{product[0].title}</h1>
        <h2>
          <del>${product[0].oldPrice} </del>
        </h2>
        <h1 >
          <b style={{color: "#7AC751", fontWeight: "500"}}>${product[0].newPrice} </b>
        </h1>
        <h3>Category:</h3>
        <div className="category">{product[0].category}</div>
        <div className="btns">
          <button className='btn1' onClick={()=> addToCart(product[0].id)}>Add to card</button>
          <button className='btn2'>Buy now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product