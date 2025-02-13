import { Section } from "../Section/Section";
import { Header } from "../Header/Header";
import { NavBar } from "../Navbar/NavBar";
import {FormData}from "../BuscarUusuarios/buscarUsuarios";

function Home() {
  return (
    <>
        <Header title="Habilidades de desarollo Fullstack"  />

     
       <div class="inicio" id="inicio">
                <div class="info">
                    <h1>STIVEN FELIX</h1>
                    <h2 style={{color:"white"}}>desarollador Fullstack</h2>
                    <div class="redes">
                        <a href="https://www.facebook.com/Stiiven.feliix/?locale=es_LA"><i class="fa-brands fa-facebook"></i>hola</a>
                        <a href="https://www.instagram.com/stifelxtrader/"><i class="fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>  
                <div class="foto">
                    
                </div>
            </div>      
    </>    
  );
}

export default Home;