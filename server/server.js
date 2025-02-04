import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const uri = "mongodb+srv://felixstiven12:Stiven5252@cluster0.pymn1.mongodb.net/user"

console.log('MongoDB URI:', uri); 

if (!uri) {
    console.error('MongoDB URI is missing. Please check .env file');
    process.exit(1);
}

mongoose.connect(uri).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('error connecting to MongoDB', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});