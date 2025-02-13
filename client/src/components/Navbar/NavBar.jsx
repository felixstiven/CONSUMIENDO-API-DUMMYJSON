
import { NavLink } from "react-router-dom";
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li >
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