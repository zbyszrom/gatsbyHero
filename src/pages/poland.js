import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'

const Poland = () => {
    const data = useStaticQuery (graphql`
    query {allVideoLinksJson (filter: {tag: {eq: "pl"}}) {
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
            <Head title="Polska"/>
            <h1>Polska</h1>
            <ol className="videos">
                {data.allVideoLinksJson.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.name}</h2>
                            <p>{edge.node.tag}</p>
                           
  <iframe src={edge.node.link} width="480" height="270" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

                            
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default Poland