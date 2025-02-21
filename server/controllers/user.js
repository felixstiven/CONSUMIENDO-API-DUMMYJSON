import userModelo from '../models/user.js';

class usersController{
    constructor(){

    }

    async create(req, res){
        try{
            const data = await userModelo.create(req.body);
            res.status(201).json(data);
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