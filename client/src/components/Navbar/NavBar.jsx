
import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li style={{listStyle: 'none'}}>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to="/productos">Productos</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to="/dummyjson">Api DummyJson</NavLink>
                </li>
                <li style={{listStyle: 'none'}}>
                    <NavLink to="/miapi">My Api</NavLink>
                </li>
            </ul>
        </nav>
    )
}