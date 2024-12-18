
const mongoose = require('mongoose');



const  userSchema = new mongoose.Schema({
    name: String,
    email: String,
    movie_id:Number,
    text: String,
    date:Date
})


module.exports = userSchema;