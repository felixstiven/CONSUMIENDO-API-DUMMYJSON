import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        nombre:{
            type:String,
            required: true
        },
        apellido:{
            type:String,
            required:true
        },
        edad: {
            type:Number,
            required:true
        },
        empleado:{
            type:Boolean,
        }
    },{timestamps:true}
);


export default  mongoose.model('Usuario', userSchema);
