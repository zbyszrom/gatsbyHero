import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Image = () => {
    const data = useStaticQuery(graphql`
    query {
        Am15: file(relativePath: { eq: "austria15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }`)
      return <Img fluid={data.Am15.childImageSharp.fluid} />
    }

export default Image
