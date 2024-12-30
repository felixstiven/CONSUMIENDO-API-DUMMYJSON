import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Register (){
        
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    ingresa tu nombre
                </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ingresa una contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Register;
