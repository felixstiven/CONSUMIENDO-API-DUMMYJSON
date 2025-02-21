import  mongoose  from "mongoose";

class dbClient {
    constructor(){
        this.conectarBaseDatos();
    }
    async conectarBaseDatos(){
        const queryString =`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@${process.env.SERVERDB}/testprueba?retryWrites=true&w=majority`;
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