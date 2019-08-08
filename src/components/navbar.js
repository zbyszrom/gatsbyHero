import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"> O moich filmach </ Link>
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
                    <Link to="#"> Reportaze i inne </ Link>
                    <ul>
                    <li>
                    <Link to="reports"> Reportaze </ Link>
                    </li>
                    <li>
                    <Link to="songs"> Do piosenek </ Link>
                    </li>
                    <li>
                    <Link to="misc"> Inne </ Link>
                    </li>
                    </ul>
                </li>

                <li>
                    <Link to="about_me"> O mnie </ Link>
                </li>
                <li>
                    <Link to="contact"> Kontakt </ Link>
                </li>
                <li>
                    <Link to="ebooks"> E-booki</ Link>
                </li>
                <li>
                    <Link to="album"> Album </ Link>
                </li>
            </ul>
            
        </nav>
    )
}
export default Navbar
