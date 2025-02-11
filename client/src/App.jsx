
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import {Productos} from './components/Section/Productos'
import './App.css'

function App() {
  

  return (

    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
      </Routes>
    </>
  )
}

export default App
