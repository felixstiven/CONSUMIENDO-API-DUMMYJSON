import { Section } from "../Section/Section";
import { Header } from "../Header/Header";
import { NavBar } from "../Navbar/NavBar";
import {FormData}from "../BuscarUusuarios/buscarUsuarios";

function Home() {
  return (
    <>
        <Header title="titulo de la app"  />
        <Section />
        <FormData/>
    </>
  );
}

export default Home;