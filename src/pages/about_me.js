import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Img from 'gatsby-image'




const About = props => {
    return (
        <Layout>
            <Head title="O mnie"/>
            <div className = "text">
        
        <h2>O mnie</h2>
        <p>Witam serdecznie wszystkich odwiedzających moją stronę.</p>
        <p>Tu będzie coś na mój temat </p>  
        <p>W tym miejscu powinienem napisać coś o sobie. Zamiast tego postanowiłem zamieścić galerię swoich zdjęć wykonanych podczas poszczególnych wypraw - po jednym do każdego filmu. Przegląd ten obejmuje 2011 - 2015 i  nie obejmuje, rzecz
                            jasna, reportaży, a także  niektórych innych pozycji. Mam nadzieję, że dzięki temu moje filmy nabiorą bardziej osobistego charakteru. Po kliknięciu dowolnej z miniatur, zdjęcia otwierają się w pełnym rozmiarze,a po ponownym kliknięciu
                            wracamy do galerii.<br /> No i na koniec może nieco banalna refleksja, która mi się nasunęła podczas wybierania i przygotowywania tych zdjęć: <em>czasy się zmieniają, a my razem z nimi...</em> </p>
    
        </div> 
        <div style = {{ display: 'flex' }}>
        <div style={{ maxWidth: `600px`, margin: '1rem', flex: '1'}}>
      
      <Img fluid={props.data.am13.childImageSharp.fluid} />
      </div>
      <div style={{ maxWidth: `600px`, margin: '1rem', flex: '1'}}>
       <Img fluid={props.data.au14.childImageSharp.fluid} />
       </div>
           
       <div style={{ maxWidth: `600px`, margin: '1rem', flex: 1}}>
       <Img fluid={props.data.au15.childImageSharp.fluid} /> 
       </div>

     
   
      
        
        </div>
      
      
         
        </Layout>
    )
}

export default About 

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`
export const pageQuery = graphql`
  query {
    am13: file(relativePath: { eq: "amsterdam13.jpg" }) {
      ...fluidImage
    }
    au14: file(relativePath: { eq: "austria14.jpg" }) {
      ...fluidImage
    }
    au15: file(relativePath: { eq: "austria15.jpg" }) {
      ...fluidImage
    }
  }
`

