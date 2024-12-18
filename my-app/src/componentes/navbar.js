
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './styleNavbar.css'

const Navbar = () => {
    return(
            <nav className="navbar navbar-dark bg-dark">
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item active'>
                        <NavLink  className="nav-link " to="/" >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link"  to="/create" >Crear orden</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contacto" >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        )
}



export default Navbar;