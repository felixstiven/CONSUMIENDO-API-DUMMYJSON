import './Form.css'
import { FaUserPlus,  FaEyeDropper } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { useState } from 'react';

export default function FormUser() {

const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [edad, setEdad] = useState(0);
const [empleado, setEmpleado] = useState(false);

const handleSubmit =  async (e) => {
  e.preventDefault();
 const res = await fetch('http://localhost:5000/usuario/create', {
  method:"POST",
   body: JSON.stringify({nombre, apellido, edad, empleado}),
   headers:{
    'Content-Type':'application/json'
   }
});
const data = await res.json();
console.log(data)
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
            <div className="input-container">
              <BsBuildingsFill className='input-icon' />
              <input 
              onChange={(e)=>{setEmpleado(e.target.checked)}}
              type="checkbox" className='icon-input'  placeholder='Empleado'/>
            </div>
            <button type='submit'>Registrarme</button>  
         </div>
      </form>
    </>
  )
}
