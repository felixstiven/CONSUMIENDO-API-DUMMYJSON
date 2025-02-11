import './Header.css';
import propTypes from 'prop-types';
import { NavBar } from '../Navbar/NavBar';



export const Header = ({children, title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <NavBar/>
        </header>
        
    )
};

Header.propTypes = {
    
    title : propTypes.string,
    children : propTypes.node
}