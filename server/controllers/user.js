import UserModelo from '../models/user.js';
import { uploadImage, deleteImage } from '../cloudinay.js';
import fs from 'fs-extra'


class UsersController{
    constructor(){

    }

    async create(req, res){
        try{
            const {nombre, apellido, edad, empleado} = req.body;

            const userData = {nombre, apellido, edad, empleado};
            const user = await UserModelo.create(userData);

            if(req.files?.image){
               const result =  await uploadImage(req.files.image.tempFilePath);
               user.image ={
                public_id : result.public_id,
                secure_url: result.secure_url
               }

               await user.save();

               await fs.unlink(req.files.image.tempFilePath); // eliminar archivos del local cuando se sube a clodinary
            }
            
            res.status(201).json(user);

        }catch(error){
            console.log(error);
            res.status(500).json({message: 'Error creating user', error})
        }
    };

    async update(req, res){
        try{
            const {id} = req.params;
            const user = await UserModelo.update(id, req.body);
            res.status(201).json(user);
        }catch(error){
            res.status(500).json({message: 'Error updating user', error});  
        }
    };

    async delete(req, res){
        try{
            const {id} = req.params;
            const data = await UserModelo.delete(id);
            if(!data){
                return res.status(404).json({message: 'User not found'})
            }
            
            if(data.image?.public_id){
                await deleteImage(data.image.public_id);
            }
            res.status(201).json({message: 'User deleted succesfully'});
        }catch(error){
            res.status(500).json({message: 'Error deleting user', error});
        }
    };

    async getAll(req, res){
        try{
            const data = await UserModelo.getAll(req.body);
            // orden de obtencion de datos 
            const formttedData = data.map(user => ({
                _id: user._id,
                nombre: user.nombre,
                apellido: user.apellido,
                edad: user.edad,
                image: user.image,
                createdAt: user.createdAt, // Agregamos createdAt si es necesario  
                updatedAt: user.updatedAt, // Agregamos updatedAt si es necesario  
                __v: user.__v
            }))
             res.status(200).json(formttedData);
        }catch(error){
            res.status(500).json({message: 'Error finding users', error});
        }
    };

    async getFilter(req, res){
        try{
            const {nombre} = req.params;
            const data = await UserModelo.getFilter(nombre);

            if(data.length == 0){
                return res.status(404).json({message:'No user found'});
            }
            res.status(200).json(data);

        }catch(error){
            res.status(500).json({message: 'Error finding users', error});
        }
    };

    async getOne(req, res){
        try{
            const id = req.params.id;
            const data = await UserModelo.getOne(id);
            if(!data){
                return res.status(404).json({message: 'User not found'})
            }
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error finding user', error});
        }
    };
}

export default new UsersController();