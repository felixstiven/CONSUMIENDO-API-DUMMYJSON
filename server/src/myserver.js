const express = require('express');
const app = express();
const mysql = require('mysql');
const mongoose = require('mongoose');
const author = require( './routes/author');


const PORT = 3001;
const cors = require('cors');

app.use(cors())
app.use(express.json())

// conexion base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'stiven',
  password: '3883',
  database: 'gestor_obras'
})

mongoose.connect("mongodb+srv://felixstiven12:Stiven((2828))@cluster0.pymn1.mongodb.net/sample_mflix",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.post('/register', author);

// peticion de guardar en base de datos
app.post('/create', (req, res) => {
  const orden = req.body.orden
  const contrato= req.body.contrato
  const cliente = req.body.cliente
  const descripcion = req.body.descripcion
  const nombre = req.body.nombre

  db.query('INSERT INTO materiales(orden, contrato, cliente, descripcion, nombre) VALUES(?, ?, ?, ?, ?)', [orden, contrato, cliente, descripcion, nombre],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})
// obtener los datos
app.get('/ordenes', (req, res) => {
  db.query('SELECT * FROM  materiales',
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

// peticion actualizacion datos
app.put('/update', (req, res) => {
  const id = req.body.id
  const orden = req.body.orden
  const contrato = req.body.contrato
  const cliente = req.body.cliente
  const descripcion = req.body.descripcion
  const nombre = req.body.nombre

  db.query('UPDATE materiales SET  orden=?, contrato=?, cliente=?, descripcion=?, nombre=? WHERE id=?', [orden, contrato, cliente, descripcion, nombre, id],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

// eleminar datos
app.delete('/delete/:id', (req, res) => {
  const id = req.params.id

  db.query('DELETE FROM materiales  WHERE id=?', id,
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})





app.listen(PORT, ()=>{
    console.log(`servidor escuchando el puerto ${PORT}`)
})

