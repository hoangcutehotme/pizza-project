import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './component/Header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserInfo from './page/UserInfo';
import Pizza from './page/Pizza';
import Footer from './component/Footer/Footer';
import Cart from './component/Cart/Cart';

import LandingPage from './page/LandingPage/LandingPage';
import Detailproduct from './component/Detailproduct/Detailproduct';

import Login from './page/login';
import Register from './page/register';
import ForgotPass from './page/forgotPass';
import Verify from './page/verify';
import ChangePassVerify from './page/changePassVerify';
import OrderPage from './page/orderPage';
import { AuthProvider } from './service/authContext';
import { UserProvider } from './service/userContext';
function App() {

  const [detail, setdetail] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [item, setitem] = useState([])

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    } else {
      localStorage.setItem('cartItems', JSON.stringify([]));
      setCartItems([]);
    }
  }, []);
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [cartItems]);


  const addToCart = (item) => {
    console.log(item);
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
    setdetail(false)

  };
  const removeToCart = (item) => {
    console.log(item);
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCartItems(
          cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
      } else {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      }
    }
  };


  return (
    <AuthProvider>
      <UserProvider>
        <div className="master-wrapper-page html-account-page" id="master-wrapper-custom-id" style={{ marginTop: '168px' }}>
          <Router>
{/* <<<<<<< HEAD
            {detail ? (<Detailproduct setdetail={setdetail} />) : (<></>)}
            <Header />
            <Routes>
              <Route path="/pizza" element={<Pizza setdetail={setdetail} />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/cart' element={<Cart />} />
======= */}
            {detail ? (<Detailproduct setdetail={setdetail} addToCart={addToCart} item={item} />) : (<></>)}
            <Header cartItems={cartItems} removeToCart={removeToCart} />
            <Routes>
              <Route path="/" element={<LandingPage />}/>
              <Route path="/pizza" element={<Pizza setdetail={setdetail} addToCart={addToCart} setitem={setitem} />} />
              {/* <Route path='/landingPage' element={<LandingPage />} /> */}
              <Route path='/cart' element={<Cart cartItems={cartItems} addToCart={addToCart} removeToCart={removeToCart} />} />
{/* >>>>>>> 6dcf86328c2119a0d6c750ab9c0054d68b8fa060 */}
              <Route path="/user/Info" element={<UserInfo />} />
              <Route path="/user/order" element={<OrderPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/forgotPass" element={<ForgotPass />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/changePassVerify" element={<ChangePassVerify />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </UserProvider>
    </AuthProvider>
  )
}


export default App;
