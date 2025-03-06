import express from 'express';
import 'dotenv/config';
import route from './routes/usuarios.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbClient from './config/dbClient.js';



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/usuario', route);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is running on port ${PORT}`);
    });
}catch(err){
    console.log(err);
}

process.on('SIGINT', async()=>{
    dbClient.cerrandoBD();
    process.exit(0);
})