
import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import MainWrapper from './layouts/MainWrapper';
import PrivateRoute from './layouts/PrivateRoute';

import Register from '../src/views/auth/Register';
import Login from '../src/views/auth/Login';
import Logout from './views/auth/Logout';
import ForgotPassword from './views/auth/ForgotPassword';
import CreateNewPassword from './views/auth/CreateNewPassword';

import Index from './views/base/Index';
import CourseDetail from './views/base/CourseDetail';
import Cart from './views/base/Cart';
import { CartContext } from './views/plugin/Context';
import CartId from './views/plugin/CartId';
import apiInstance from './utils/axios';
import Checkout from '../src/views/base/Checkout';
import Success from './views/base/Success';
import Search from '../src/views/base/Search';




function App() {

  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    apiInstance.get(`course/cart-list/${CartId()}/`).then((res) => {
      console.log(res.data)
      setCartCount(res.data?.length)
    });

    console.log(cartCount)
  }, [])


  return (
    <CartContext.Provider value={[cartCount, setCartCount]}>


      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/register/" element={<Register />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/logout/" element={<Logout />} />
            <Route path="/forgot-password/" element={<ForgotPassword />} />
            <Route path="/create-new-password/" element={<CreateNewPassword />} />


            {/* Base Routes */}
            <Route path="/" element={<Index />} />
            <Route path={`/course-detail/:slug/`} element={<CourseDetail />} />
            <Route path={`/cart/`} element={<Cart />} />
            <Route path={`/checkout/:order_oid/`} element={<Checkout />} />
            <Route path={`/payment-success/:order_oid/`} element={<Success />} />
            <Route path={`/search/`} element={<Search />} />

          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
