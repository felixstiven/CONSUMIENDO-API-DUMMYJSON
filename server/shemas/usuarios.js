import mongoose from "mongoose";


const UserShema = new mongoose.Schema(
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
        },
        image: {
            public_id: String,
            secure_url: String
        }
    },{timestamps:true}
);

const User = mongoose.model('Usuario', UserShema);

export default User;
