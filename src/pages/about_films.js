import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
import '../styles/index.scss'
const IndexPage = () => {
    
    const data = useStaticQuery (graphql`
    query {allVideoLinksJson  {
        edges {
          node {
            name
            link
            tag
            
          }
        }
      }
        
      }`)
    return (
        <Layout>
         
            <Head title="Strona główna"/>
            <div className="page">

            
            <h2>O moich filmach</h2>
            <p>Cześć, mam na imię Zbigniew.<br/> Moje hobby to fotografia, krótkie filmy, oraz tłumaczenie piosenek i poezji z angielskiego. <br/>
            Witam serdecznie wszystkich odwiedzających moją stronę</p>
           
           
            <h2>Wybrane filmy</h2>
                </div>
                        <section >                  
            <ol className="videos">
                {data.allVideoLinksJson.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.name}</h2>
                            <p>tag: {edge.node.tag}</p>
                            
  <iframe src={edge.node.link} width="480" height="270" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

           
                        </li>
                    )
                })}
            </ol>
            
            </section>
                
        </Layout>
    )
}
export default IndexPage
