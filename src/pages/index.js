import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from 'gatsby'
import BackgroundImage from "../pictures/paris12.jpg"

import indexStyles from "./index.module.scss"

const IndexPage = () => {
    return (
       <div>
            <Head title="Hero"/>
            <div className={indexStyles.image}> 
             <Layout>  
        <header className={indexStyles.header}>
        
        <h2>   
            <Link className={indexStyles.title} to="/about_films">Moje prace</Link> 
        </h2>
         
        
         
        
         
        
          
      </header> 
      </Layout>
      </div>
      </div>
      
    )
}
export default IndexPage