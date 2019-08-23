import React from 'react'

import Head from "./head"
import { Link } from 'gatsby'
import '../styles/index.scss'


const Navbar = () => {
    return (
    <div>    
    <Head title="Hero"/>
            
   
        
    <nav className="nav__menu">
   
  <ul>
    <li>
        <Link to ="/">Początek</Link>
    </li>
    <li>
        <Link to="about_films">Wybrane</Link>
    </li>
    <li className="nav__sub-menu">
    
    
    <Link to ="/">Podróze</Link>
    
      
      <ul>
          <li><Link to="america">Ameryka</Link></li>
          <li><Link to="europe">Europa</Link></li>
          <li><Link to="poland">Polska</Link></li>
      </ul>
    
    </li>
    <li className="nav__sub-menu">
    <Link to ="/">Rózne</Link>
    
      
      <ul>
          <li><Link to="reports">Reportaze</Link></li>
          <li><Link to="misc">Inne</Link></li>
      </ul>
    
    </li>
      
    <li>
    <Link to ="about_me">O mnie</Link>
    </li>
    <li>
    <Link to ="ebooks">Ebooki</Link>
    </li>
    <li>
    <Link to ="album">Album</Link>
    </li>
    <li>
        <Link to="contact">Kontact</Link>
    </li>
  </ul>
</nav>

             
   

    </div> 
     
     
      
    )
}
export default Navbar