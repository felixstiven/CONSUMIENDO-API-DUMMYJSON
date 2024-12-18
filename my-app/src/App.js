import { Routes, Route } from "react-router-dom";
import Navbar from "./componentes/navbar";
import Producto from "./componentes/inicio";
import Crearorden from "./componentes/crearorden";
import Contacto from "./componentes/contacto";
import NotFound from "./componentes/NotFound";



const App = ()=> {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Producto />} />
          <Route path="/create" element={<Crearorden/>} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/" element={Producto}/>
        </Routes>
    </>
  );
}

export default App;
