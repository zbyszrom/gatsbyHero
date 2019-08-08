import React from 'react'
import { Link } from 'gatsby'
import Navbar from './navbar' 
const Header = () => {
    return (
      <header>
          <h2>
              <Link to="/">Moje prace</Link> 
          </h2>
          <Navbar />
      </header>  
    )
}
export default Header