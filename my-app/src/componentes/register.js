import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import axios from 'axios';




function Register (){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submit = async(e) =>{
        e.preventDefault();

        try{
            const response = axios.post('http://localhost:3001/register', {
                username,
                email,
                password,
            });
            setMessage((await response).data.message)//mensaje de exito 
        } catch (error) {
            setMessage(error.message || 'Error en el registro')//mensaje de error
        }
    }





        
    return (

        <div className='container'>
            <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ingresa un nombre se usuario</Form.Label>
                <Form.Control type="text" placeholder="ingresa un usuario" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ingresa un correo electronico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa un correo" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}  
                    required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Ingresa una contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required />
            </Form.Group>
            <Button variant="primary" type="submit">
                enviar
            </Button>
        </Form>
        <p>{message}</p>
        </div>

    )
}

export default Register;
