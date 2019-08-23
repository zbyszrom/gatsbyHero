import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="container">
        <div className="content">
            <Navbar />

            <div className="page">
            {props.children}
            </ div>
        </div>
        <Footer />
    </div>
    )
}

export default Layout