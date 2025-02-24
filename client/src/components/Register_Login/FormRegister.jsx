import './FormRegister.css'
import { FaUserPlus,  FaEyeDropper } from "react-icons/fa";

import { useState } from 'react';
import Swalt from 'sweetalert2';

export default function FormUser() {

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState(0);

  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/usuario/create', {
      method:"POST",
      body: JSON.stringify({nombre, apellido, edad}),
      headers:{
        'Content-Type':'application/json'
      }
    });
    if(res.ok){
      const data = await res.json();
      Swalt.fire({
        title: " <h1>Registro Exitoso!!</h1>",
            html: "Hola <strong>"+nombre+"</strong> te has registrado con exito!!",
            icon: "success",
            timer : 4000
      })
      console.log(data);
    } else(err)=>{
        Swalt.fire({
          icon: "error",
          title: "Oops...",
          text: "No se logro resgistrar",
          footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "intenta mas tarde" : JSON.parse(JSON.stringify(err)).message
        })
      }
    }
    
    
    return (
    <>
      <form  onSubmit={handleSubmit} className="container-form">
        <h1>Registro</h1>
        <div className='form'>
            <div className="input-container">
              <FaUserPlus  className='input-icon' />
              <input 
              onChange={(e) => {
                setNombre(e.target.value)}}
              type="text"  className='icon-input' placeholder='Nombre' name='nombre'/>
            </div>
            <div className="input-container">
              <FaUserPlus className='input-icon'/>
              <input
              onChange={(e) => {
                setApellido(e.target.value)}}
              type="text" className='icon-input' placeholder='Apellido' name='apellido'

            />
            </div>
            <div className="input-container">
              <FaEyeDropper className='input-icon' />
              <input 
              onChange={(e) => {setEdad(e.target.value)}}
              type="number" className='icon-input'  placeholder='Edad' name='edad'/>
            </div>
                <button type='submit'>Registrarme</button>
        </div>
      </form>
    </>
  )
}
