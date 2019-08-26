import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Img from 'gatsby-image'
import '../styles/index.scss'
import Am from "../pictures/amsterdam13.jpg" 
import Au from "../pictures/austria14.jpg" 
import Pa from "../pictures/paris12.jpg" 
console.log(Am)



const About = () => {
    return (
        <Layout>
            <Head title="O mnie"/>
            
        
        <h2>O mnie</h2>
        <div className="text">
        <h3>Witam serdecznie wszystkich odwiedzających moją stronę.</h3>
        <p>Tu będzie coś na mój temat <br/>  
        W tym miejscu powinienem napisać coś o sobie. Zamiast tego postanowiłem zamieścić galerię swoich zdjęć wykonanych podczas poszczególnych wypraw - po jednym do każdego filmu. Przegląd ten obejmuje 2011 - 2015 i  nie obejmuje, rzecz
                            jasna, reportaży, a także  niektórych innych pozycji. Mam nadzieję, że dzięki temu moje filmy nabiorą bardziej osobistego charakteru. Po kliknięciu dowolnej z miniatur, zdjęcia otwierają się w pełnym rozmiarze,a po ponownym kliknięciu
                            wracamy do galerii.<br /> No i na koniec może nieco banalna refleksja, która mi się nasunęła podczas wybierania i przygotowywania tych zdjęć: <em>czasy się zmieniają, a my razem z nimi...</em> </p>
    
                            </div>                
                            <div className="pics" >
     
        
           <div className="pic">   
          <img src={Am} alt="Amsterdam"/> 
          </div>
          <div className="pic"> 
           <img src={Au} alt="Austria" />
           </div>
           <div className="pic"> 
           <img src={Pa} alt="Paris" />
           </div> 
      
        </div>
      
         
        </Layout>
    )
}

export default About 

/* export const fluidImage = graphql`
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

/* <div style = {{ display: 'flex' }}
flex: 1 */