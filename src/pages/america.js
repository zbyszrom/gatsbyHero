import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/layout"
import Head from "../components/head"
import '../styles/index.scss'

const America = () => {
    const data = useStaticQuery (graphql`
    query {allVideoLinksJson (filter: {tag: {eq: "am"}}) {
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
            <Head title="Ameryka"/>
            <h1>Ameryka Pn.</h1>
            <ol className="videos">
                {data.allVideoLinksJson.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.name}</h2>
                            
                            
  <iframe src={edge.node.link}  frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
 
                            
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default America