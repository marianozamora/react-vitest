import React from 'react'
import { Outlet } from 'react-router-dom';
// import Navbar from '../02-molecules/NavBar';
import Header from '../03-organisms/Header';
export const Layout = ({ children }: any) => {
    return (
        <div>
        <Header />
        <div id="detail">
        <Outlet />
        </div>
        {/* <Footer /> */}
        </div>
    )
}
