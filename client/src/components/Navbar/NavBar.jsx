
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/productos">Productos</NavLink>
                </li>
            </ul>
        </nav>
    )
}