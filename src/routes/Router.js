import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Admin from '../pages/admin'
import Auth from '../pages/auth'
import Home from '../pages/home'


function Router() {
    return (
        <>
            <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='auth' element={<Auth />} />
                </Routes>
            <Footer />
        </>
    )
}

export default Router