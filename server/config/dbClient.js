import { MongoClient } from "mongodb";

class dbClient {
    constructor(){
        const queryString=`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@${process.env.SERVERDB}/?retryWrites=true&w=majority&appName=Cluster0`;
        this.client = new MongoClient(queryString);
        this.conectarBD();
    }

    async conectarBD() {
        try {
            await this.client.connect();
            this.db = this.client.db('user');
            console.log('Conexión a la base de datos exitosa');
        } catch (error) {
            console.log('Error conectando a la base de datos', error);
        }
    }
}
export default new dbClient();