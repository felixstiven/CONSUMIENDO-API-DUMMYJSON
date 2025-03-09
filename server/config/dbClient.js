import  mongoose  from "mongoose";

class dbClient {
    constructor(){
        this.conectarBaseDatos();
    }
    async conectarBaseDatos(){
        const userName = encodeURIComponent(process.env.USERDB);
        const password = encodeURIComponent(process.env.PASSWORDDB);    
        console.log(process.env.USERDB, process.env.PASSWORDDB, process.env.SERVERDB);
        const queryString =`mongodb+srv://${userName}:${password}@cluster0.pymn1.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`;
        // this.client = new MongoClient(queryString );
        try{
            await mongoose.connect(queryString);
            console.log("Conexion a la base de Datos exitosa");
        }catch(error){
            console.error('Error a la conexion base de Daos', error)
        }
        
        
    }

    async cerrandoBD() {
        try{
            await mongoose.disconnect();
            console.log('Desconexión de la base de datos exitosa');
        }catch(error){
            console.log('Error desconectando la base de datos', error);
        }    
    }
}
export default new dbClient();