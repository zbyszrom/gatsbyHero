import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import Amsterdam from "../pictures/amsterdam13.jpg"
import austria14 from "../pictures/austria14.jpg"
import austria15 from "../pictures/austria15.jpg"
import paris from "../pictures/paris12.jpg"
import wieden from "../pictures/wieden12.jpg"
console.log(Amsterdam)
const About = () => {
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
        <span style = {{ display: 'flex', alignItems: 'center' }}>
        <img src= {Amsterdam} alt= "Amsterdam" style= {{margin: '0 5px'}}/>< br />
        <img src= {austria14} alt= "Amsterdam"style= {{margin: '0 5px'}}/>< br />
        <img src= {austria15} alt= "Amsterdam"style= {{margin: '0 5px'}}/>< br />
        <img src= {paris} alt= "Amsterdam"style= {{margin: '0 px'}}/>< br />
        <img src= {wieden} alt= "Amsterdam"style= {{margin: '0 10px'}}/>< br />
        </span>
          
        </Layout>
    )
}

export default About 