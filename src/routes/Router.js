import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import AboutUs from '../pages/about'
import Admin from '../pages/admin'
import Cart from '../pages/cart'
import Favorite from '../pages/favorite'
import Goods from '../pages/goods'
import Home from '../pages/home'
import Profile from '../pages/profile'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'


function Router() {
    const locat = useLocation();
    const [state, setstate] = useState(false);
    useEffect(() => {
        if (locat.pathname === "/signUp" || locat.pathname === "/signIn") {
            setstate(true);
        } else {
            setstate(false);
        }
    }, [locat]);

    return (
        <>
            {!state && <Header/>}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='favorite' element={<Favorite />} />
                    <Route path='aboutUs' element={<AboutUs />} />
                    <Route path='goods' element={<Goods />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='signUp' element={<SignUp />} />
                    <Route path='signIn' element={<SignIn />} />
                </Routes>
            {!state && <Footer/>}
        </>
    )
}

export default Router