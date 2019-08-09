import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Image = () => {
    const data = useStaticQuery(graphql`
    query {
        Au15: file(relativePath: { eq: "austria15.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        Au14: file(relativePath: { eq: "austria14.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              }
            }
          }

      }`)
      const {Au14} = data
      return <Img fluid={Au14.childImageSharp.fluid} />
    }

export default Image
