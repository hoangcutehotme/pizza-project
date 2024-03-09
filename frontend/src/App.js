import './App.css';
import React, { useState } from 'react';
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
  const [detail, setdetail] = useState(true)
  return (
    <AuthProvider>
      <UserProvider>
        <div class="master-wrapper-page html-account-page" id="master-wrapper-custom-id" style={{ marginTop: '168px' }}>
          <Router>
            {detail ? (<Detailproduct setdetail={setdetail} />) : (<></>)}
            <Header />
            <Routes>
              <Route path="/pizza" element={<Pizza setdetail={setdetail} />} />
              <Route path='/' element={<LandingPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="/user/Info" element={<UserInfo />} />
              <Route path="/user/order" element={<OrderPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/forgotPass" element={<ForgotPass />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/changePassVerify" element={<ChangePassVerify />} />
            </Routes>
            {/* <Footer /> */}
          </Router>
        </div>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
