import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/products/Product';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/cart/Cart';
import Modal from './components/modal/Modal';

function App() {
  const [data, setData]=useState([
    {
      img: "/imgs/trending-1.png",
      title: "Minimal LCD chair",
      category: "Chair",
      newPrice: 180,
      oldPrice: 250,
      id: 1,
      new: false,
      sale: true
    },
    {
      img: "/imgs/trending-2.png",
      title: "Minimal iconic chair",
      category: "Chair",
      newPrice: 120,
      oldPrice: 150,
      id: 2,
      new: false,
      sale: true
    },
    {
      img: "/imgs/trending-3.png",
      title: "Dining chairs",
      category: "Chair",
      newPrice: 100,
      oldPrice: 120,
      id: 3,
      new: true,
      sale: false
    },
    {
      img: "/imgs/trending-4.png",
      title: "Buskbo armchair ",
      category: "Sofa",
      newPrice: 130,
      oldPrice: 150,
      id: 4,
      new: true,
      sale: false
    },
    {
      img: "/imgs/trending-5.png",
      title: "Modern chairs",
      category: "Chair",
      newPrice: 100,
      oldPrice: 120,
      id: 5,
      new: true,
      sale: false
    },
    {
      img: "/imgs/trending-6.png",
      title: "Plastic dining chair",
      category: "Chair",
      newPrice: 130,
      oldPrice: 150,
      id: 6,
      new: true,
      sale: false
    },
    {
      img: "/imgs/trending-7.png",
      title: "Minimal Wood chair",
      category: "Chair",
      newPrice: 180,
      oldPrice: 250,
      id: 7,
      new: false,
      sale: true
    },
    {
      img: "/imgs/trending-8.png",
      title: "Elegent wood chair",
      category: "Sofa",
      newPrice: 120,
      oldPrice: 150,
      id: 8,
      new: false,
      sale: true
    },
  ])
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const selectedProduct = data.find((product) => product.id === productId);
    setCart([...cart, selectedProduct]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  
  return (
    <>
      <BrowserRouter>
      <Navbar toggleModal={toggleModal} cart={cart}/>
      <Modal toggleModal={toggleModal}  visible={modalVisible}/>
      <Routes>
        <Route  path='/' element={<Home data={data} addToCart={addToCart}/>}/>
        <Route  path='/product/:id' element={<Product addToCart={addToCart} data={data}/>}/>
        <Route path='/cart' element={<Cart removeFromCart={removeFromCart} cart={cart}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
