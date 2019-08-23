import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Head from "../components/head"
import { Link } from 'gatsby'
import '../styles/index.scss'


const IndexPage = () => {
    return (
<div className="page">



        <Head title="Hero"/>
        <div className="hero-container ">
        
        <header className="hero-header">
        <Navbar />
        <h1 className="hero-title">      
            <Link  className="hero-title" to="/about_films">Moje prace</Link>
            </h1>
       <Footer />
      </header>
      
      </div>
      
      </div>
     
      
    )
}
export default IndexPage