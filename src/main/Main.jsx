import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

const Main = () => {
    return (
        <div className='pt-14'>
            <Navbar />
            <Outlet />
            <Footer />

        </div>
    )
}

export default Main