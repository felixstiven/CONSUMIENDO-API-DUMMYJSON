import mongoose from 'mongoose';
import Usuario from '../shemas/usuarios.js'

class userModelo{
    async create(usuario){
        return await Usuario.create(usuario)
    };

    async getAll(){
        return await Usuario.find();
    }


    async getOne(id){
        return await Usuario.findById(id);
    }
    async getFilter(nombre){
        console.log('buscando por:', nombre)
        return await Usuario.find({nombre: new RegExp(nombre, 'i')});
    }

    async update(id, user){
        return await Usuario.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)}, user)
    }

    async delete(id){
       return await Usuario.findOneAndDelete( {_id: new mongoose.Types.ObjectId(id)})
    }


}

export default new userModelo();