import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio";
import Crearorden from "./componentes/crearorden";
import Contacto from "./componentes/contacto";
import NotFound from "./NotFound";



const App = ()=> {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/create" element={<Crearorden/>} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={Inicio}/>
        </Routes>
    </>
  );
}

export default App;
