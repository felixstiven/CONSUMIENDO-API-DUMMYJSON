const express = require('express');  
const cors = require('cors');  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Middleware  
app.use(cors());  
app.use(express.json());  

// Ruta de prueba  
app.get('/api', (req, res) => {  
    const hola = console.log('hola')
    res.send(hola);  
});  

// Inicia el servidor  
app.listen(PORT, () => {  
    console.log(`Servidor escuchando en el puerto ${PORT}`);  
});  