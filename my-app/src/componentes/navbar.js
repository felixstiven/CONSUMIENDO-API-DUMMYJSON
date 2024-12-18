import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/create" >Sobre nosotros</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" >Contacto</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;