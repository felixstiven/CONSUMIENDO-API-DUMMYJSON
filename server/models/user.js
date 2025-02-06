import dbClient from "../config/dbClient.js";


class userModelo{
    async create(usuario){
        const colUser = dbClient.db.collection('test prueba');
        return await colUser.insertOne(usuario)
    }
}

export default new userModelo();