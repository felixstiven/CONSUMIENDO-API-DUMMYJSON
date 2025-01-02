import Button from 'react-bootstrap/Button';
import './styleauthen.css'
import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'; 





function Register (){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        // validar campos primero
        if(!username || !email || !password){
            Swal.fire({
                icon:'warning',
                title:'Campos obligatorios',
                text:'Por favor, Completa todos los campos',
                timer: 3000,
            })
            return;  // detener si hay campos vacios
        }

        Axios.post('http://localhost:3001/register', {
            username,
            email,
            password,
        }).then(() =>{
            limpiar();
            Swal.fire({
                    title: " <h1>Registro exitoso!!</h1>",
                    html: "El usuario <strong>"+username+"</strong> se ha agregado correctamente",
                    icon: "success",
                    timer : 3000,
            })
        }).catch(function(err){
            const errorMessage = err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                :'Error en el servidor '
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage,
                    footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "Intenta mas tarde" : "Error en el servidor",
                    timer: 3000,
            });
        })
    };

    // limpiar campos de register

    const limpiar = () => {
        setUsername("");
        setEmail("");
        setPassword("");
    }
    





        
    return (

        <div className='container-2'>
            <div className='row'>
                <label>usario</label>
                <input 
                    type="text" 
                    placeholder='ingresa un usario' 
                    value={username} 
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='row'>
                <label>email</label>
                <input 
                    type="email" 
                    placeholder='ingresa un email' 
                    value={email} 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='row'>
                <label>contraseña</label>
                <input 
                    type="password" 
                    placeholder='ingresa una contrseña' 
                    value={password} 
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='btn'>
                <Button className='Button' onClick={submit}>registrar</Button>
                <Link to='/login'>
                    <Button className='Button' >iniciar sesion</Button>
                </Link>
            </div>
        </div>
    )
}

export default Register;
