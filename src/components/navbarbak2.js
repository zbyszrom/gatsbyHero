import React from 'react'
import { Link } from "gatsby"
import navbarStyles from './navbar.module.scss'
const Navbar = () => {
    return (
       <nav >
            <ul className={navList}>
                        <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="/"> Początek </ Link>
                        </li> 
                        <li>
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="about_films"> Wybrane </ Link>
                        </li>   
                        <li >
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="america"> Ameryka </ Link>
                        </li>
                        <li >
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="europe"> Europa </ Link>
                        </li>
                        <li >
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="poland"> Polska </ Link>
                        </li>
                        <li >
                         <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem}  to="reports"> Reportaze </ Link>
                        </li>
                        <li >
                        <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="misc"> Inne </ Link>
                        </li>
                        <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="about_me"> O mnie </ Link>
                </li>
                
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="ebooks"> Ebooki</ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="album"> Album </ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="contact"> Kontakt </ Link>
                </li>            
            </ul>     
         </nav>
    )
}
export default Navbar
