import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2'; 





function Register (){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
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

        <div className='container'>
            <div className='row'>
                <label>usario</label>
                <input type="text" placeholder='ingresa un usario' value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='row'>
                <label>email</label>
                <input type="text" placeholder='ingresa un email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='row'>
                <label>contraseña</label>
                <input type="password" placeholder='ingresa una contrseña' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <Button onClick={submit}>registrar</Button>
        </div>
    )
}

export default Register;
