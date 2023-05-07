import React from 'react'
import { Outlet } from 'react-router-dom';
// import Navbar from '../02-molecules/NavBar';
import Header from '../03-components/Header';

export const Layout = ({ children }: any) => {
    return (
        <div>
        <Header />
        <Container>
        <Outlet />
        </Container>
        {/* <Footer /> */}
        </div>
    )
}
