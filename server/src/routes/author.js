const express = require('express');
const bcrypt = require('bcrypt');// PARA ENCRIPTAR CONTRASEÑAS
const User = require('../models/modelUser');

const router = express.Router();

// Rutas para registrar el nuevo usuario 

router.post('/register', async(req, res) => {
    const  {username, email, password} = req.body;

    try{
        // validar si el usuario ya esxite 
        const existingUser = await User.findOne({email})
        if (existingUser){
            return res.status(400).json({message: 'El usuario ya existe'});
        }

        // encriptar la contraseña

        const hashedPassword = await bcrypt.hash(password, 10);

        // creando el nuevo usario 
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        });

        await newUser.save();
        res.status(201).json({message:'Usuario resgistrado exitosamente.'})
    } catch (error) {
        res.status(500).json({message:'error en el servidor', error})
    }

});

module.exports = router;
