
import { NavLink } from "react-router-dom";


// export const NavBar = () => {
//     return (
//         <nav className="navbar">
//             <ul className="navbar-list">
//                 <li >
//                     <NavLink to="/">Inicio</NavLink>
//                 </li>
//                 <li style={{listStyle: 'none'}}>
//                     <NavLink to="/productos">Productos</NavLink>
//                 </li>
//                 <li style={{listStyle: 'none'}}>
//                     <NavLink to="/dummyjson">Api DummyJson</NavLink>
//                 </li>
//                 <li style={{listStyle: 'none'}}>
//                     <NavLink to="/miapi">My Api</NavLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar= () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="me-auto" style={{color: 'yellow'}}>
            <NavDropdown  className='dropdown' title="Proyectos" id="basic-nav-dropdown">
              <NavDropdown.Item ><NavLink to="/productos">Inicio</NavLink></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

