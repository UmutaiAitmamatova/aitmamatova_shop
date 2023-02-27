import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import AboutUs from '../pages/about'
import Admin from '../pages/admin'
import Auth from '../pages/auth'
import Cart from '../pages/cart'
import Favorite from '../pages/favorite'
import Goods from '../pages/goods'
import Home from '../pages/home'
import Profile from '../pages/profile'


function Router() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='auth' element={<Auth />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='favorite' element={<Favorite />} />
                    <Route path='aboutUs' element={<AboutUs />} />
                    <Route path='goods' element={<Goods />} />
                    <Route path='profile' element={<Profile />} />
                </Routes>
            <Footer />
        </>
    )
}

export default Router