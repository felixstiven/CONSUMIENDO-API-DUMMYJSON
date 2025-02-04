import './Header.css';
import propTypes from 'prop-types';



export const Header = ({children, title, show}) => {
    return (
        <header className="header">
            <h1 className='tile'>{title || 
                "titulo por defecto"}</h1>
            {children}
            {
                show ? <p>este texto se va mostrar si el prop show es true</p>
                     : <p>shwo es falso</p>
                
            }
        </header>
        
    )
};

Header.propTypes = {
    children: propTypes.node,
    title : propTypes.string,
    show: propTypes.bool
}