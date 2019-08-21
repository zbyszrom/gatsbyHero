import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from 'gatsby'
import BackgroundImage from "../pictures/paris12.jpg"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
    return (
        <div className={indexStyles.container}> 
        <header className={indexStyles.header}>
        <div className={indexStyles.image}> 
            <Head title="Hero"/>
            
             <Layout>  
        
        
        <h2>   
            <Link className={indexStyles.title} to="/about_films">Moje prace</Link> 
        </h2>
    .Link
        
      </Layout>

      
     
      </div>
      </header>
      </div>
     
      
    )
}
export default IndexPage