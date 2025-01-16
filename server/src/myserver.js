const express = require('express');
const app = express();
const mysql = require('mysql');
// const mongoose = require('mongoose');
const bcrypt = require('bcrypt');// PARA ENCRIPTAR CONTRASEÑAS
const jwt = require('jsonwebtoken');// PARA GENERAR TOKENS
// const User = require('../models/modelUser');
// const twilio = require('twilio');
// const nodemair = require('nodemailer');


const PORT = 3001;
const cors = require('cors');
const { format } = require('path');
// const { resolve } = require('path');
// const { rejects } = require('assert');

app.use(cors())
app.use(express.json())

// conexion base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'stiven',
  password: '3883',
  database: 'gestor_obras'
});

// // configuracion Nodemair 
// const transporter = nodemair.createTransport({
//   service:'gmail',
//   auth:{
//     user:'felixstiven12@gmail.com',
//     pass:''
//   }
// });

// configuracion Twilio
const accountSid = 'AC7738595791718ae27f34bcd6b7cd34ae'; // encentra en twilio
const authToken = '6bfbc0973a7d0ba3d569e5f70b8211ae'; // encentra en twilio
const twilioPhoneNumber ='+16813956309' // encuentra en twilio
const client = require('twilio')(accountSid, authToken);

// notificacion
// app.post('/notify', async(req, res) =>{
//   const { phone, orderStatus} = req.body;

//   // neviar  correo
//   const clientConfig = client
//   client.messages.create({
//     body:`Tu orden ha cambiado de estado a: ${orderStatus}`,
//     from: twilioPhoneNumber,
//     to:phone
//   }).then(message => console.log(message.sid))
// })

// peticion  registrar usuario 
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

// inicio de sesion
app.post('/login', (req, res)=>{
  const {email, password} = req.body;


    db.query('SELECT * FROM login WHERE email =?', [email], (err, results) => {
      if(err){
        console.error('Error al verificar contraseña', err)
        return res.status(500).json({message:'Error al verificar contraseña.'});
      }
      if(results.length === 0){
        console.log('Email y/o contraseña incorrecto')
        return res.status(401).json({message:'Email y/o contraseña incorrecto'});

      }

      const user = results[0];
      // verificar la contraseña
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err){
          console.error('erro al verificar contraseña')
          return res.status(500).json({message:'Error al verificar la contraseña'});
        }
        if(!isMatch){
          console.log('Email y/o contraseña incorrectos')
          return res.status(401).json({message: 'Email y/o contraseña incorrectos'});
        }
        // crear token de autenticacion
        const token = jwt.sign({id: user.id, username: user.username}, 'secretkey', {expiresIn:'1h'});

        res.status(200).json({message:'Inicio de sesion exitoso', token})
      });
    });
});

// peticion de guardar  en base de datos
app.post('/create', (req, res) => {
  const orden = req.body.orden
  const contrato= req.body.contrato
  const cliente = req.body.cliente
  const descripcion = req.body.descripcion
  const nombre = req.body.nombre
  const numPhone = req.body.numPhone
  const estado = req.body.estado

  db.query('INSERT INTO materiales(orden, contrato, cliente, descripcion, nombre, numphone, estado) VALUES(?, ?, ?, ?, ?, ?, ?)', [orden, contrato, cliente, descripcion, nombre, numPhone, estado],
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

//peticion cambio de estado en las ordenes
// Petición cambio de estado en las órdenes  
app.put('/pendiente/:id', async (req, res) => {  
  const orderId = req.params.id;  
  const estado = req.body.estado;  
  const phone = req.body.phone; // obtener el teléfono del usuario  

  // Primero, actualiza el estado de la orden en la base de datos  
  db.query('UPDATE materiales SET estado = ? WHERE id = ?', [estado, orderId], async (err, results) => {  
    if (err) {  
      console.log('Error al actualizar el estado');  
      return res.status(500).send(err);  
    } else {  
      // Envía el mensaje de Twilio   
      try {  
        await client.messages.create({  
          body: `Tu orden ha cambiado de estado a: ${estado}`,  
          from: twilioPhoneNumber,  
          to: phone  
        });  
        console.log(`Mensaje enviado al numero ${phone} `);  
        res.status(200).send(results);  
      } catch (messageError) {  
        console.error('Error al enviar el mensaje:', messageError);  
        res.status(500).send("Error al enviar el mensaje");  
      }  
    }  
  });  
});



// Obetener ordenes filtradas por estado
app.get('/ordenes/:estado?', (req, result) => {
  const estado = req.params.estado;
  let query = 'SELECT * FROM materiales';
  const queryParams = [];
  
  if(estado){
    query += 'WHERE estado = ?';
    queryParams.push(estado);
  }

  db.query(query, queryParams, (err,result) =>{
    if(err){
      console.log(err);
    }else {
      res.send(result)
    }
  });
});


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

