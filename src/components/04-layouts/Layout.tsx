import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../03-components/Header';
import Container from '../04-layouts/Container';

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
