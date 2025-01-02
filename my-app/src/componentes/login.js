import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Axios  from 'axios';
import Swal from 'sweetalert2';

function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) => {
            e.preventDefault();

            Axios.post('http://localhost:3001/login', {
                email,
                password,
            }).then(() => {
                Swal.fire({
                            title: " <h1>inicio de sesion exitoso!!</h1>",
                            icon: "success",
                            timer : 4000,
                })
            }).catch((err) =>{
                const errorMesagge = err.response && err.response.data && err.response.data.message
                ? err.response.data.message
                :'Error en la conexion'
                Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: errorMesagge,
                            footer: JSON.parse(JSON.stringify(err)).message==="Network Error" ? "Intenta mas tarde" : "Error en el servidor",
                            timer: 5000,
                });        
            });
    }








        
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </Form.Group>
            <Button 
                variant="primary" 
                type="submit"
                onClick={submit}
            >
                iniciar sesion
            </Button>
        </Form>
    )
}

export default Login;




