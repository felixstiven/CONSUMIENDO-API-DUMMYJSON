import { Routes, Route} from "react-router-dom";
// import Navbar from "./componentes/navbar";
import Producto from "./componentes/inicio";
import Crearorden from "./componentes/crearorden";
import Contacto from "./componentes/contacto";
import NotFound from "./componentes/NotFound";
import Login from "./componentes/login";



const App = ()=> {
  return (
    <>

        <Routes>
          <Route path="/" element={<Producto />} />
          <Route path="/create" element={<Crearorden/>} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/resgister" element={<NotFound/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </>

  );
}

export default App;
