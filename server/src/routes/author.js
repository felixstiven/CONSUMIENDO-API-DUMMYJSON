// const express = require('express');
// const bcrypt = require('bcrypt');// PARA ENCRIPTAR CONTRASEÑAS
// const User = require('../models/modelUser');

// const router = express.Router();

// // Rutas para registrar el nuevo usuario 

// router.post('/register', async(req, res) => {
//     const  {username, email, password} = req.body;
//         // validar si el usuario ya esxite 
//         const existingUser = await User.findOne({email})
//         if (existingUser){
//             return res.status(400).then(()=>{
//                 Swal.fire({
//                     title: " <h1>Registro rechazado</h1>",
//                     html: "El usuario <strong>"+username+"</strong> ya se enceuntra registrado",
//                     icon: "succes",
//                     timer : 3000,
//                 })
//             })
//         }

//         // encriptar la contraseña
//         const hashedPassword = await bcrypt.hash(password, 10);
//         // creando el nuevo usario 
//         const newUser = new User({
//             username,
//             email,
//             password:hashedPassword,
//         });
// });

// module.exports = router;
