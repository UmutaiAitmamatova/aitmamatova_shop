import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Admin from '../pages/admin'
import Auth from '../pages/auth'
import Cart from '../pages/cart'
import Favorite from '../pages/favorite'
import Home from '../pages/home'


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
                </Routes>
            <Footer />
        </>
    )
}

export default Router