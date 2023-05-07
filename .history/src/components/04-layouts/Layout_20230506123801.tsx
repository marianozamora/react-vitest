import React from 'react'
import Navbar from '../02-molecules/NavBar';
export const Layout = ({ children }) => {
    return (
        <div>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        </div>
    )
}
