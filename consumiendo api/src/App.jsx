import {Header}  from './components/Footer/Header/Header'
import Footer from './components/Footer/Footer'
import {Section} from './components/Footer/Section/Section'
import './App.css'

function App() {
  

  return (

    <>
      <Header title='titulo de la app' show={false}/>
      <Section/>
      <Footer/>
    </>
  )
}

export default App
