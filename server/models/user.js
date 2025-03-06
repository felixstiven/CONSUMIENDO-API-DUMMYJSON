import mongoose from 'mongoose';
import User from '../shemas/usuarios.js'

class UserModelo{
    
    async create(usuario){
        return await User.create(usuario)
    };

    async getAll(){
        return await User.find();
    }


    async getOne(id){
        return await User.findById(id);
    }
    async getFilter(nombre){
        console.log('buscando por:', nombre)
        return await User.find({nombre: new RegExp(nombre, 'i')});
    }

    async update(id, user){
        return await User.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, user)
    }

    async delete(id){
       return await User.findOneAndDelete( {_id: new mongoose.Types.ObjectId(id)})
    }


}

export default new UserModelo();