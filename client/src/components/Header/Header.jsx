import './Header.css';
import propTypes from 'prop-types';
import { NavBar } from '../Navbar/NavBar';



export const Header = ({children, title}) => {
    return (
        <>
             <header className="header">
               <h1>{title}</h1>
               <NavBar/>
            </header>
            <section className="hero">
                <div className="container">
                    <div className="foto">
                        <img src="StivenFelixAlvis.jpeg" alt="foto"/>
                    </div>
                    <div className='info'>
                        <h1>Stiven Felix</h1>
                        <h2>Desarollador Fullstack</h2>
                    </div>
                    <div className="description">
                        <p>Me dedico a estudiar, producir ideas creativas y originales</p>
                    </div>
                </div>
            </section>
        </>
       
        
    )
};

Header.propTypes = {
    
    title : propTypes.string,
    children : propTypes.node
}