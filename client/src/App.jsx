import {Header}  from './components/Header/Header'
import {Section} from './components/Section/Section'
import {Routes, Route} from 'react-router-dom'
import { Productos } from './components/Section/Productos'
import './App.css'

function App() {
  

  return (

    <>
      <Header title='titulo de la app' show={false}/>
      <Section/>
    </>
  )
}

export default App
