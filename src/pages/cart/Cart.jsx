import React from 'react'
import { Link } from 'react-router-dom';
import "./Cart.css"
import { GoTrash } from "react-icons/go";


function Cart({cart, removeFromCart}) {
    
    const handleRemove = (index) => {
        removeFromCart(index);
    };

  return (
    <div className="cart">
        <div className="container">
        <div  className="trending_boxes trending_boxes_cart">
          {cart?.map((item, index)=>{
            return (
              <div key={item.id} className="trending_box">
                <div className="trending_img">
                  <Link to={`/product/${item.id}`}>
                    <img src={item.img} alt="" />
                  </Link>
                  <span className={item.new ? "sale" : "new"}>{item.new ? true : "New"}{item.sale ? true : "Sale"}</span>
                  <div className="trending_img_hover">
                  <div className="trending_img_hover_box">
                    <img src="./public/imgs/heart.png" alt="" />
                  </div>
                  <div className="trending_img_hover_box">
                    <img onClick={()=> addToCart(item.id)} src="./public/imgs/add.png" alt="" />
                  </div>
                  <div className="trending_img_hover_box">
                    <img src="./public/imgs/refresh.png" alt="" />
                  </div>
                  <div className="trending_img_hover_box">
                    <img src="./public/imgs/eye.png" alt="" />
                  </div>
                </div>
            </div>
            <p className='type'>{item.category}</p>
            <h3>{item.title} <GoTrash onClick={()=>{
                handleRemove(index)
            }} className='trash_icon'/></h3>
            <div className="trending_price">
              <div className="trending_price_left">
                <p>${item.newPrice}</p>
                <del>${item.oldPrice}</del>
              </div>
              <div className="trending_price_right">
                <img src="./public/imgs/full_star.png" alt="" />
                <img src="./public/imgs/full_star.png" alt="" />
                <img src="./public/imgs/full_star.png" alt="" />
                <img src="./public/imgs/full_star.png" alt="" />
                <img src="./public/imgs/full_star.png" alt="" />
              </div>
            </div>
          </div>
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default Cart