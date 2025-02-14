
import { Header } from "../Header/Header.jsx";
import { MdFacebook  } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsPersonCircle, BsPinMap, BsEmojiSunglasses  } from "react-icons/bs";
import { NavBar } from "../Navbar/NavBar.jsx";

import './Home.css';

function Home() {
  return (
    <>
        <Header title="Fullstack"  />
        <section className="hero">
                <div className="container">
                    <div className='info'>
                        <h1>Desarollador Frontend y Backend</h1>
                    </div>
                    <div className="description">
                    <p>Codifico y programo cosas maravillosas simples, y me encanta lo que hago</p>
                    </div>
                </div>
            </section>

            {/* <section className="inicio" id="inicio">
                   <div className="info">
                       <h1>STIVEN FELIX</h1>
                       <h2>desarollador Fullstack</h2>
                       <div className="redes">
                           <a href="https://www.facebook.com/Stiiven.feliix/?locale=es_LA"><MdFacebook/></a>
                           <a href="https://www.instagram.com/stifelxtrader/"><FaSquareInstagram/></a>
                       </div>
                   </div>  
                   <div className="foto">
                       
                   </div>   
            </section>  */}
  
  
       <section className="sobremi" id="sobremi">
            <div className="contenido-seccion">
                <h2 className="titulo-seccion">Sobre Mi</h2>
                <p className="especial">Me dedico a estudiar, producir ideas creativas y originales</p>
                <div className="fila">
                    <div className="col">
                        <BsPersonCircle className="fa-solid fa-user"/>
                        <span className="titulo-detalle">Perfil</span>
                        <p>Desarollador full stack y bakend</p>
                    </div>
                    <div className="col">
                        <BsPinMap/>
                        <span className="titulo-detalle">Ubicacion</span>
                        <p>Colombia. Bogota D,C</p>
                    </div>
                    <div className="col">
                        <BsEmojiSunglasses/>
                        <span className="titulo-detalle">Intereses</span>
                        <p>Estudiar, programar, jugar soccer, dedicar tiempo a mi familia.</p>
                    </div>
                </div>
            </div>
        </section> 
        <section className="contacto" id="contacto">
           <div className="contenido-seccion">
               <h2 className="titulo-seccion">Contacto</h2>
               <h3>Ponte en contacto ahora mismo!</h3>
       
               <div className="fila">
                   <div className="col">
                       <h2>
                       <i className="fa-solid fa-phone"></i> Telefono
                       </h2>
                       <span className="info-contacto">+57-3107729036</span>
                   </div>
                   <div className="col">
                       <h2>
                           <i className="fa-solid fa-envelope"></i> Correo
                       </h2>
                       <span className="info-contacto">felixstiven12@gmail.com</span>
                   </div>
                   <div className="col">
                       <h2>
                           <i className="fa-solid fa-globe"></i> Pagina web
                       </h2>
                       <span className="info-contacto">felixstiven.com</span>
                   </div>
               </div>
           </div>
        </section>
      </>
  );
}

export default Home;