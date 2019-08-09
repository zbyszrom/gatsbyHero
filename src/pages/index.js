import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from "../components/head"
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
            <h1>O moich filmach</h1>
            <h3>Cześć, mam na imię Zbigniew. Moje hobby to fotografia, krótkie filmy, oraz tłumaczenie piosenek i poezji z angielskiego </h3>
            <p>Witam serdecznie wszystkich odwiedzających moją stronę</p>
            <h1>Wybrane filmy</h1>
            <ol>
                {data.allVideoLinksJson.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.name}</h2>
                            <figure class="video_container">
  <iframe src={edge.node.link} width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</figure>
                            <p>{edge.node.tag}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default IndexPage
