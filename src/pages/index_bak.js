import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from 'gatsby'
import '../styles/index.scss'
import bgimage from '../pictures/paris12.jpg'

import indexStyles from "./index.module.scss"

const IndexPage = () => {
    return (
<div>

        <Layout >
        
        <Head title="Hero"/>
        <div className="hero-container "> 
        <header className="hero-header">
        
        <h1 className="">     
            <Link  className="hero-title hero-image" to="/about_films">Moje prace</Link>
        </h1>
        

       
       
    
        
      

      
     
      
      </header>
      </div>
      </Layout>
      </div>
     
      
    )
}
export default IndexPage