import React from 'react'
import { Header } from '../02-molecules/Header';
export const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
}
