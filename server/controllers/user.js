import userModelo from '../models/user.js';
import cloudinary from 'cloudinary';
import streamifier from 'streamifier';

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

class usersController{
    constructor(){

    }

    async create(req, res){
        try{
            let fotoUrl; // variable para almacenar la url de la imagen

            if(req.file){
                //convertir el buffer a un stream y subirlo a cloudinary
                const stream = cloudinary.uploader.upload_stream({resource_type: 'auto'},
                    (error, result) =>{
                        if(error){
                            return req.status(500).json({message: 'Error uploading image', error});
                        }
                        fotoUrl = result.secure_url; // guardar la url segura

                        // Despues de que la imagen se suba, crea el usuario
                        createUser();
                    });
                    // crear un stream y enviarlo a cloudinary
                    streamifier.createReadStream(req.file.buffer).pipe(stream);
            }else{
                // si no hay imagen, crear el usuario sin foto
                createUser();
            }
            // funcion de crear al usuario
            const createUser = async () => {
                const userData = {
                    ...req.body, // Obtener los datos del usuario del cuerpo solicitud
                    foto: fotoUrl //Agregar la url de la imagen (si se subio)
                };
                const data = await userModelo.create(userData)// usando el modelo para crear el usuario
                res.status(201).json(data);
                
            };
            
        }catch(error){
            res.status(500).json({message: 'Error creating user', error});
        }
    };

    async update(req, res){
        try{
            const {id} = req.params;
            const user = await userModelo.update(id, req.body);
            res.status(201).json(user);
        }catch(error){
            res.status(500).json({message: 'Error updating user', error});  
        }
    };

    async delete(req, res){
        try{
            const {id} = req.params;
            const data = await userModelo.delete(id);
            if(!data){
                return res.status(404).json({message: 'User not found'})
            }
            res.status(201).json({message: 'User deleted succesfully'});
        }catch(error){
            res.status(500).json({message: 'Error deleting user', error});
        }
    };

    async getAll(req, res){
        try{
            const data = await userModelo.getAll(req.body);
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error finding users', error});
        }
    };

    async getFilter(req, res){
        try{
            const {nombre} = req.params;
            const data = await userModelo.getFilter(nombre);

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
            const data = await userModelo.getOne(id);
            if(!data){
                return res.status(404).json({message: 'User not found'})
            }
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error finding user', error});
        }
    };
}

export default new usersController();