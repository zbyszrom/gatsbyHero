import React from 'react'
import { Link } from "gatsby"
import navbarStyles from './navbar.module.scss'
const Navbar = () => {
    return (
        <nav>
            <ul className={navbarStyles.navList}>
                <li>
                    <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem}to="/"> Początek </ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="about_films"> O moich filmach </ Link>
                </li>
                <li>
                    <Link to="#"> Podróze </ Link>
                    <ul>
                    <li>
                    <Link to="america"> Ameryka Pn. </ Link>
                    </li>
                    <li>
                    <Link to="europe"> Europa </ Link>
                    </li>
                    <li>
                    <Link to="poland"> Polska </ Link>
                    </li>
                    </ul>
                </li>
                <li>
                <Link  to="#"> Reportaze i inne </ Link>
                    <ul>
                    <li>
                    <Link  to="reports"> Reportaze </ Link>
                    </li>
                    <li>
                    <Link  to="songs"> Do piosenek </ Link>
                    </li>
                    <li>
                    <Link to="misc"> Inne </ Link>
                    </li>
                    </ul>
                </li>

                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="about_me"> O mnie </ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="contact"> Kontakt </ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="ebooks"> E-booki</ Link>
                </li>
                <li>
                <Link className={navbarStyles.navItem} activeClassName={navbarStyles.activeNavItem} to="album"> Album </ Link>
                </li>
            </ul>
            
        </nav>
    )
}
export default Navbar
