
import { Header } from "../Header/Header.jsx";
import { GiTargetDummy } from "react-icons/gi";
import { FaServer } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";



import './Home.css';

function Home() {
  return (
    <>
        <Header title="Fullstack"  />
           <section className="hero">
                <div className="container">
                    <div className='info'>
                        <h1>Desarollador Frontend y Backend</h1>
                        <p>Codifico y programo, y me encanta lo que hago</p>
                    </div>
                </div>
            </section>
            <section className="sobremi" id="sobremi">
                <div className="contenido-seccion">
                    <h2 className="titulo-seccion">Juega!!</h2>
                    <p className="especial">Prueba esta aplicacion</p>
                    <div className="fila">
                        <div className="col">
                            <GiTargetDummy className="fa-user"/>
                            <h4 className="titulo-detalle">APY DUMMIJSON</h4>
                            <p>Solicite a la api y obtenga datos de productos y usuarios</p>
                            <div className="container-bt">
                                <button className="bt">Jugar</button>
                            </div>
                        </div>
                        <div className="col">
                            <FaServer className="fa-user"/>
                            <h4 className="titulo-detalle">MY API RESTful</h4>
                            <p>Ve y comprueba realizando solicitudes http de mi propio servidor</p>
                            <div className="container-bt">
                                <button className="bt">Jugar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section> 
            <section className="sobremi sobremi-2" id="sobremi">
                <div className="contenido-seccion seccion-2">
                    <div className="titulo-principal">  
                        <h2 className="titulo-seccion-2">Ganador hackathon TECH 2024</h2>
                        <p className="especial especial-2">Desarollo de una aplicacion web para la Unidad Administrativa Especial de    Servicios Publicos (UAESP)</p>
                    </div>
                    <div className="container-hackathon">
                        <div className="hackathon">
                            <img src="hackathon.jpeg" alt="UAESP" /> 
                        </div>
                        <div className="hackathon">
                            <img src="tech.jpeg" alt="UAESP" /> 
                        </div>
                    </div>
                </div>
            </section> 
            <section className="contacto" id="contacto">
                    <div className="contenido-seccion">
                        <h3>CONTACTO</h3>
                        <p>Ponte en contacto ahora mismo</p>
                    </div>
                     <div className="fila">
                        <div className="col">
                            <a className="info-contacto" href="https://api.whatsapp.com/send/?phone=573107729036"><IoLogoWhatsapp  /></a>
                        </div>
                        <div className="col">
                            <a className="info-contacto" href="mailto:felixstiven12@gmail.com"><IoMdMail /></a>
                        </div>
                        <div className="col">
                            <a className="info-contacto" href="https://github.com/felixstiven"><FaGithub /></a>
                        </div>
                    </div>
            </section>
      </>
  );
}

export default Home;