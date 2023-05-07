import React from 'react'

export const Layout = ({ children }) => {
    return (
        <div>
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
}
