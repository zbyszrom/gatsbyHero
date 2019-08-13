import React from 'react'
import { Link } from 'gatsby'
import Navbar from './navbar' 
import headerStyles from "./header.module.scss"
const Header = () => {
    return (
        <header className={headerStyles.header}>
        <div className={headerStyles.image}>
     
        
          <h2>
              <Link className={headerStyles.title} to="/">Moje prace</Link> 
          </h2>
          </div>
          <Navbar />
         
      </header>  
    )
}
export default Header