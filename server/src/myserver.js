const express = require('express');
const app = express();
const mysql = require('mysql');
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');// PARA ENCRIPTAR CONTRASEÑAS
// const User = require('../models/modelUser');


const PORT = 3001;
const cors = require('cors');
const { resolve } = require('path');
const { rejects } = require('assert');

app.use(cors())
app.use(express.json())

// conexion base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'stiven',
  password: '3883',
  database: 'gestor_obras'
})

// uso en el enpoint
app.post('/register', async (req, res) => {  
  const { username, email, password } = req.body;  

  try {  
    // Verificar si el usuario ya existe  
    db.query('SELECT * FROM login WHERE email = ? OR  username = ?', [ email, username], (err, results) => {  
      if (err) {  
        console.error('Error en la consulta:', err);  
        return res.status(500).json({ message: 'Error al verificar el usuario.' });  
      }  

      // Si el usuario ya existe  
      if (results.length > 0) {  
        const isEmailTaken= results.some(user => user.email === email); 
        const isUsernameTaken = results.some(user => user.username === username);

        // mensaje apropiado segun el resultado 
          if (isEmailTaken) {
            return res.status(400).json({ message: 'El correo electrónico ya está en uso.'})
          }
          if (isUsernameTaken) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso'})
          }
      }
   
      // Encriptar la contraseña  si no hay usuarios o email iguales
      bcrypt.hash(password, 10, (err, hashedPassword) => {  
        if (err) {  
          console.err('error al encriptar la contraseña', err);  
          return res.status(500).json({ message: 'Error al encriptar la contraseña.' });  
        }  

        // Crear un nuevo usuario  
        db.query('INSERT INTO login(username, email, password) VALUES(?, ?, ?)', [username, email, hashedPassword], (err) => {  
          if (err) {  
            console.err('Error al crear un usuario', err);  
            return res.status(500).json({ message: 'Error al crear el usuario.' });  
          }  
            return res.status(201).json({ message: 'Usuario registrado exitosamente.' });  

        });  
      });
    });    
  } catch (err) {  
    console.log(err);  
    res.status(500).json({ message: 'Error en el servidor.' });  
  }  
});
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

