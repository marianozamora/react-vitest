import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../02-molecules/NavBar';
export const Layout = ({ children }: any) => {
    return (
        <div>
        <Navbar />
        <div id="detail">
        <Outlet />
        </div>
        {/* <Footer /> */}
        </div>
    )
}
