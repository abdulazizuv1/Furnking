import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Home.css"

function Home({ data, addToCart }) {
  const [mainImg, setMainImg] = useState(`/imgs/hero_chair.png`);
  const [activeFilter, setActiveFilter] = useState('all'); 
  const filteredData = data?.filter(item => {
    if (activeFilter === 'new') {
      return item.new;
    } else if (activeFilter === 'sale') {
      return item.sale;
    }
    return true; 
  });
  return (
    <>
    <nav className="nav3">
      <div className="container">
        <ul className='ul'>
          <li><a className='all ' href="">
            <img src="./public/imgs/menu.png" alt="" /> ALL COLLECTIONS</a>
          </li>
          <li><a className='a' href="">HOME</a></li>
          <li><a className='a' href="">SHOP</a></li>
          <li><a className='a' href="">BLOG</a></li>
          <li><a className='a' href="">ABOUT</a></li>
          <li><a className='a' href="">CONTACT US</a></li>
        </ul>
      </div>
    </nav>
    <div className="hero">
      <div className="container">
        <div className="hero_left">
          <ul>
            <li><a style={{marginTop: "-5px"}} href="">All</a></li>
            <li><a href="">New Arrivals</a></li>
            <li><a href="">Hot Sale</a></li>
            <li><a href="">Furniture</a></li>
            <li><a href="">Amrature</a></li>
            <li><a href="">Tabble</a></li>
            <li><a href="">Chair</a></li>
            <li><a href="">Sofa</a></li>
            <li><a href="">Mirrors</a></li>
            <li><a href="">Stools</a></li>
            <li><a href="">Benches</a></li>
          </ul>
        </div>
        <div className="hero_right">
          <div className="hero_info">
          <div className="hero_left_info">
            <h2>TOP COLLECTIONS 2022</h2>
            <h1>We Serve Your <br />Dream Furniture</h1>
            <h3 className='hero_text'>Get 50% off all products</h3>
            <button>SHOP NOW</button>
          </div>
          <div className="hero_right_info">
            <img src={mainImg} alt="" />
          </div>
          <div className="hero_liitle_imgs">
            <div className="hero_little_img">
              <img onClick={()=>{setMainImg("./public/imgs/hero_little_chair1.png")}} src="./public/imgs/hero_little_chair1.png" alt="" />
              <h3>$120</h3>
              <p>Office Desk Chair</p>
            </div>
            <div className="hero_little_img">
              <img onClick={()=>{setMainImg("./public/imgs/hero_little_chair2.png")}} src="./public/imgs/hero_little_chair2.png" alt="" />
              <h3>$180</h3>
              <p>	Home Alisa Sofa</p>
            </div>
            <div className="hero_little_img">
              <img onClick={()=>{setMainImg("./public/imgs/hero_little_chair3.png")}} src="./public/imgs/hero_little_chair3.png" alt="" />
              <h3>$250</h3>
              <p>Modern Chair</p>
            </div>
          </div>
          </div>
          <div className="slider">
          <div className="slide"></div>
          <div className="slide"></div>
          <div className="slide slide_full"></div>
          <div className="slide"></div>
        </div>
        </div>
        
      </div>
    </div>
    <section>
      <div className="container features">
        <div className="features_box">
          <div className="feature_left">
            <img src="./public/imgs/larry.png" alt="" />
          </div>
          <div className="feature_right">
            <h4>Free Shipping</h4>
            <p>Orders over $100</p>
          </div>
        </div>
        <div className="features_box">
          <div className="feature_left">
            <img src="./public/imgs/prize.png" alt="" />
          </div>
          <div className="feature_right">
            <h4>Smart Gift Card</h4>
            <p>Buy $1000 to get card</p>
          </div>
        </div>
        <div className="features_box">
          <div className="feature_left">
            <img src="./public/imgs/wallet.png" alt="" />
          </div>
          <div className="feature_right">
            <h4>Quick Payment</h4>
            <p>100% secure payment</p>
          </div>
        </div>
        <div className="features_box">
          <div className="feature_left">
            <img src="./public/imgs/headphones.png" alt="" />
          </div>
          <div className="feature_right">
            <h4>24/7 Support</h4>
            <p>Quick support</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container offer">
        <div className="offer_left">
          <div className="offer_img1">
            <img src="./public/imgs/img1.png" alt="" />
            <div className="offer1_info">
              <h2>Modern Furniture Collections</h2>
              <h3>Starting from $500</h3>
              <a href=''>Read more →</a>
            </div>
          </div>
          
        </div>
        <div className="offer_right">
          <div className="offer_img2">
            <img src="./public/imgs/img2.png" alt="" />
            <div className="offer1_info offer2_info">
              <h2>Geometric Bookcase</h2>
              <h3>Up to 20% discount</h3>
              <a href=''>Read more →</a>
            </div>
          </div>
          <div className="offer_img3">
            <img src="./public/imgs/img3.png" alt="" />
            <div className="offer1_info offer3_info">
              <h2>Minimal Sofa collections </h2>
              <h3>Sale upto 40% discount</h3>
              <a href=''>Read more →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container tranding">
        <p className='trending_title'>TRENDING</p>
        <div className="tranding_nav">
          <p className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}>Top Products</p>
          <p className={activeFilter === 'sale' ? 'active' : ''}
              onClick={() => setActiveFilter('sale')}>New Arrivals</p>
          <p className={activeFilter === 'new' ? 'active' : ''}
              onClick={() => setActiveFilter('new')}>Best Sellers</p>
        </div>
        <div  className="trending_boxes">
          {filteredData?.map((item)=>{
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
            <h3>{item.title}</h3>
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
    </section>
    </>
  )
}

export default Home