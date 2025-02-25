
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import {Productos} from './components/Section/Productos'
import { BuscarUsuarios } from './components/BuscarUsuarios/BuscarUsuarios.jsx'
import MyApi from './components/MyApi/MyApi.jsx'
import FormUser from './components/Register_Login/FormRegister.jsx'
import './App.css'

function App() {
  

  return (

    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/miapi" element={<MyApi/>} />
            <Route path='/play' element={<BuscarUsuarios/>}/>
            <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  )
}

export default App
