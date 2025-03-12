
import { Header } from "../Header/Header.jsx";
import { GiTargetDummy } from "react-icons/gi";
import { FaServer } from "react-icons/fa";



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
                            <span className="titulo-detalle">APY DUMMIJSON</span>
                            <p>Solicite a la api y obtenga datos de productos y usuarios</p>
                            <div>
                                <button className="btn btn-primary">Jugar</button>
                            </div>
                        </div>
                        <div className="col">
                            <FaServer className="fa-user"/>
                            <span className="titulo-detalle">MY API RESTful</span>
                            <p>Ve y comprueba realizando solicitudes http de mi propio servidor</p>
                            <div>
                                <button className="btn btn-primary">Jugar</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section> 
            <section className="sobremi" id="sobremi">
                <div className="contenido-seccion seccion-2">
                    <h2 className="titulo-seccion-2">Ganador hackathon TECH 2024</h2>
                    <p className="especial especial-2">Desarollo de una aplicacion web para la Unidad Administrativa Especial de    Servicios Publicos (UAESP)</p>
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
                    <h2 className="titulo-seccion">Contacto</h2>
                    <h3>Ponte en contacto ahora mismo!</h3>
                    <div className="fila">
                        <div className="col">
                            <h2>Telefono</h2>
                            <a className="info-contacto" href="https://api.whatsapp.com/send/?phone=573107729036">+573107729036</a>
                        </div>
                        <div className="col">
                            <h2>Correo</h2>
                            <a className="info-contacto" href="mailto:felixstiven12@gmail.com">felixstiven12@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>
      </>
  );
}

export default Home;