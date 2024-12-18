const express = require('express');
const mongoose = require('mongoose');
const app = express();
userSchema = require('./models/model')

const PORT =3002;

mongoose.connect("mongodb+srv://felixstiven12:Stiven((2828))@cluster0.pymn1.mongodb.net/sample_mflix")

const userModel1 = mongoose.model("comentario", userSchema);
const comentario = new userModel1({
    name: "yeimy orjuela",
    email: "felixstiven12@gmail.com",
    movie_id: 123456789,
    text: "This is a comment",
    date: "2022-01-01"
});

comentario.save();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})