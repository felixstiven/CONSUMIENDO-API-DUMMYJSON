import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";


class userModelo{
    async create(usuario){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.insertOne(usuario)
    };

    async getAll(){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.find({}).toArray();
    }

    async getOne(id){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.findOne({ _id: new ObjectId(id)});
    }

    async update(id, data){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.updateOne({ _id: new ObjectId(id)}, {$set: data});
    }

    async delete(id){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.deleteOne({ _id: new ObjectId(id)});
    }


}

export default new userModelo();