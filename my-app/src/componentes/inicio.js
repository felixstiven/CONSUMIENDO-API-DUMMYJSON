
import React from "react";
import {Card, CardContent, CardMedia, Typography, Button} from '@mui/material';



function Producto() {
    return (
        <Card sx={{ maxWidth: 600, margin:'20px auto', boxShadow:3 }}>
            <CardMedia

                component="img"
                height="240"
                image="https://images.ctfassets.net/63bmaubptoky/rUAaJE-ZpGM5tdbVeScrxrQvx0OThlVVLPuKkW8-SpY/050afca6feecd15118f58c05f0013f45/agendar-citas-ES-Capterra-Header.jpg"
                alt="Grestion"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Gestion de ordenes para una buena productivida y comunicacion
                </Typography>
                <Typography  variant="body2" component="text.secondary">
                    ¡Es una plataforma ideal para gestionar las solcitudes de tu empresa!
                </Typography>
                <Typography  variant="h6" component="div" sx={{marginTop:2}}>
                    Detalles de Gestionfelx
                </Typography>
                <ul>
                    <li>
                        <Typography variant="body2">Recibe las ordenes de tus empleados</Typography>
                    </li>
                    <li>
                        <Typography variant="body2">Observa las ordenes autorize o rechaze</Typography>
                    </li>
                    <li>
                        <Typography variant="body2">Tu como administrador puedes ver las ordenes de todos los empleados por medio de notificaciones</Typography>
                    </li>
                </ul>
                <Button variant="contained" color="success" sx={{marginTop:2}}>
                    visitar haora
                </Button>
                


            </CardContent>
        </Card>
    );
}

export default Producto