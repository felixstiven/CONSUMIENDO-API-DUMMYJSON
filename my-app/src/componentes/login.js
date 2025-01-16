import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Axios  from 'axios';
import Swal from 'sweetalert2';
import './styleauthen.css'
import { useNavigate, Link} from 'react-router-dom';

function Login (){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // inicializando useHistory

    const submit = (e) => {
            e.preventDefault();

            Axios.post('http://localhost:3001/login', {
                email,
                password,
            }).then(( response) => { // caprurando la respuesta 
                const {token} = response.data;
                localStorage.setItem('token', token);

                Swal.fire({
                            title: " <h1>inicio de sesion exitoso!!</h1>",
                            icon: "success",
                            timer : 4000,
                }).then(()=>{
                    // redirigiendo despues de la alerta exito de sesion
                    navigate('/home')
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
        <>
            <div>
            <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
            </div>
            <Form className='container-2'>
                <h1>Login</h1>
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
                    <Form.Label className='form-label'>Password</Form.Label>
                    <Form.Control 
                        className='form-control'
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </Form.Group>
                <Button className='Button'
                    variant="primary" 
                    type="submit"
                    onClick={submit}
                >
                    iniciar sesion
                </Button>
                <Link to='/register' className='Link'>
                        <Button className='Button' >Registrase</Button>
                </Link>
            </Form>
        </>
    )
}

export default Login;




