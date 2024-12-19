
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
import './styleNavbar.css'

const Navbar = () => {
    return(
            <nav className="navbarContainer">
                <ul className='navbar'>
                    <li className='list'>
                        <NavLink  className="list-2" to="/" >Inicio</NavLink>
                    </li>
                    <li className='list'>
                        <NavLink className="list-2"  to="/create" >Crear orden</NavLink>
                    </li>
                    <li className='list'>
                        <NavLink className="list-2" to="/contacto" >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
            
        )
}



export default Navbar;