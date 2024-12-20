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
    const orden= req.body.orden
    const numeroContrato = req.body.numeroContrato
    const cliente = req.body.cliente
    const fechaSolicitud = req.body.fechaSolicitud
    const fechaEntrega = req.body.fechaEntrega
    const direccion = req.body.direccion
    const nombreSolicitante = req.body.nombreSolicitante
    const descripcion = req.body.descripcion

    db.query(' INSERT INTO materiales( orden, contrato, cliente, fechasolicitud, fechaentrega, direccion, nombresolicitante, descripcion) VALUES (?,?,?,?,?,?,?,?)', [orden, numeroContrato, cliente, fechaSolicitud, fechaEntrega, direccion, nombreSolicitante, descripcion], (
        (err,result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    ))

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
    const orden= req.body.orden
    const numeroContrato = req.body.numeroContarto
    const cliente = req.body.cliente
    const fechaSolicitud = req.body.fechaSolicitud
    const fechaEntrega = req.body.fechaEntrega
    const direccion = req.body.direccion
    const nombreSolicitante = req.body.nombreSolicitante
    const descripcion = req.body.descripcion

    db.query('UPDATE materiales SET orden=?, numerocontrato=?, cliente=?, fechasolicitud=?, fechaentrega=?, direccion=?, nombresolicitante, descripcion WHERE id=?', [orden, numeroContrato,cliente, fechaSolicitud, fechaEntrega, direccion, nombreSolicitante, descripcion], (
        (err,result)=>{
            if(err){
                console.log(err)
            } else{
                res.send(result)
            }
        }
    ))
})

// eliminar datos 
app.delete('/delete/:id', (req, res)=>{
    const id = req.params.id
    db.query('DELETE FROM materiales WHERE id=?', id,
        (err, result)=>{
            if (err) {
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

