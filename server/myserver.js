const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// conexion base de datos 
const db = mysql.createConnection({
    host: 'localhost',
    user:'stiven',
    password: '3883',
    database: 'gestor_obras'
});

// peticion guardar en base de datos 

app.post('/create', (req, res) => {
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const orden = req.body.orden

    db.query(' INSERT INTO materiales( nombre, descripcion, orden) VALUES (?,?,?)', [nombre, descripcion, orden],
        (err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )

});

// obetener los datos
app.get('/ordenes', (req, res)=>{
    db.query('SELECT * FROM materiales', (err, result) => {
        if (err) {
            console.log(err);
        }else {
            res.send(result)
        }
    })
})

// actualizacion base de datos
app.put('/update',(req,res)=>{
    const id = req.body.id
    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const orden = req.body.orden

    db.query('UPDATE materiales SET nombre=?, descripcion=?, orden=? WHERE id=?', [nombre,descripcion,orden,id],
        (err,result)=>{
            if(err){
                console.log(err)
            } else{
                res.send(result)
            }
        }
    )
})


app.listen(PORT, ()=>{
    console.log(`servidor escuchando el puerto ${PORT}`)
})

