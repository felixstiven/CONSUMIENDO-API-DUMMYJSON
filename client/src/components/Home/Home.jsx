
import { Header } from "../Header/Header.jsx";
import { BsPersonCircle, BsPinMap, BsEmojiSunglasses } from "react-icons/bs";



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
                    <h2 className="titulo-seccion">Sobre Mi</h2>
                    <p className="especial">Me dedico a estudiar, producir ideas creativas y originales</p>
                    <div className="fila">
                        <div className="col">
                            <BsPersonCircle className="fa-user"/>
                            <span className="titulo-detalle">Perfil</span>
                            <p>Desarollador full stack y backend</p>
                        </div>
                        <div className="col">
                            <BsPinMap className="fa-user"/>
                            <span className="titulo-detalle">Ubicacion</span>
                            <p>Colombia. Bogota D,C</p>
                        </div>
                        <div className="col">
                            <BsEmojiSunglasses className="fa-user"/>
                            <span className="titulo-detalle">Intereses</span>
                            <p>Estudiar, programar, jugar soccer, dedicar tiempo a mi familia.</p>
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