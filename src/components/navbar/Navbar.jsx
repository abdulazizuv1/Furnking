import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar({cart, toggleModal}) {
  return (
    <nav className='nav_all' >
    <nav className='nav1'>
      <div className="container nav_top">
        <div className="nav_top_left">
          <p>Welcome to our online shop</p>
        </div>
        <div className="nav_top_right">
          <select name="" id="">
            <option value="">English (USD)</option>
            <option value="">Russian (RU)</option>
            <option value="">Uzbek (UZ)</option>
          </select>
          <p>
            <a href="">Login </a>
            or
            <a href=""> Sign up</a>
          </p>
        </div>
      </div>
    </nav>
    <nav className="nav2">
      <div className="container">
          <Link to="/">
          <div className="logo">
            <img src="/imgs/logo.png" alt="" />
            </div>
          </Link>
        <form className='form' action="">
          <input className='input' type="text" placeholder='Search here'/>
          <select name="" id="">
            <option value="">Categories</option>
            <option value="">Chair</option>
            <option value="">Sofa</option>
            <option value="">Table</option>
          </select>
          <button className='btn'>
            <img src="/imgs/search.png" alt="" />
          </button>
        </form>
        <div className="login">
          <p>name</p>
        </div>
        <div className="nav_user">
          <Link to="/cart">
          <div className="nav_shop">
            <img src="/imgs/shop_icon.png" alt="" />
            <span>{cart.length}</span>
          </div>
          </Link>
          <div className="nav_notific">
            <img src="/imgs/Notification.png" alt="" />
          </div>
          <div onClick={toggleModal} className="nav_user">
            <img src="/imgs/user.png" alt="" />
          </div>
        </div>
      </div>
    </nav>
    
    </nav>
  )
}

export default Navbar