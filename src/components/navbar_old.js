import React from 'react'
import { Link } from "gatsby"
import '../styles/index.scss'
const Navbar = () => {
    return (
       <nav >
            <ul className='nav-list'>
                        <li >
                        <Link className='nav-item' activeClassName='active-nav-item' to="/"> Początek </ Link>
                        </li> 
                        <li>
                        <Link className='nav-item' activeClassName='active-nav-item' to="about_films"> Wybrane </ Link>
                        </li>   
                        <li >
                        <Link className='nav-item' activeClassName='active-nav-item' to="america"> Ameryka </ Link>
                        </li>
                        <li >
                        <Link className='nav-item' activeClassName='active-nav-item' to="europe"> Europa </ Link>
                        </li>
                        <li >
                        <Link className='nav-item' activeClassName='active-nav-item' to="poland"> Polska </ Link>
                        </li>
                        <li >
                         <Link className='nav-item' activeClassName='active-nav-item'  to="reports"> Reportaze </ Link>
                        </li>
                        <li >
                        <Link className='nav-item' activeClassName='active-nav-item' to="misc"> Inne </ Link>
                        </li>
                        <li>
                <Link className='nav-item' activeClassName='active-nav-item' to="about_me"> O mnie </ Link>
                </li>
                
                <li>
                <Link className='nav-item' activeClassName='active-nav-item' to="ebooks"> Ebooki</ Link>
                </li>
                <li>
                <Link className='nav-item' activeClassName='active-nav-item' to="album"> Album </ Link>
                </li>
                <li>
                <Link className='nav-item' activeClassName='active-nav-item' to="contact"> Kontakt </ Link>
                </li>            
            </ul>     
         </nav>
    )
}
export default Navbar
