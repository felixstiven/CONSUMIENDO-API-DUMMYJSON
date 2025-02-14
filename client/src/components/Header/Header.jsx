import './Header.css';
import propTypes from 'prop-types';
import { NavBar } from '../Navbar/NavBar';
import { FaHtml5,  FaReact , FaNodeJs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript  } from "react-icons/io";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiLaragon } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa6";




export const Header = ({children, title}) => {
    return (
        <>
            <header className="header">
               <h1>{title}</h1>
               <div className="header-content">
                  <span><FaHtml5/></span>
                  <span><IoLogoCss3/></span>
                  <span><IoLogoJavascript/></span>
                  <span><FaReact/></span>
                  <span><BiLogoMongodb/></span>
                  <span><SiLaragon/></span>
                  <span><SiExpress/></span>
                  <span><FaNodeJs/></span>
                  <span><FaGithubAlt/></span>
               </div>
               <NavBar/>
            </header>
        </>
       
        
    )
};

Header.propTypes = {
    
    title : propTypes.string,
    children : propTypes.node
}