import userModelo from '../models/user.js';

class usersController{
    constructor(){

    }

    async create(req, res){
        try{
            const data = await userModelo.create(req.body);
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error creating user', error});
        }
    };

    async update(req, res){
        try{
            const {id} = req.params;
            const data = await userModelo.update(id);
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error updating user', error});  
        }
    };

    async delete(req, res){
        try{
            const {id} = req.params;
            const data = await userModelo.delete(id);
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error deleting user', error});
        }
    };

    async getAll(req, res){
        try{
            const data = await userModelo.getAll();
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error finding users', error});
        }
    };

    async getOne(req, res){
        try{
            const id = req.params.id;
            const data = await userModelo.getOne(id);
            res.status(200).json(data);
        }catch(error){
            res.status(500).json({message: 'Error finding user', error});
        }
    };
}

export default new usersController();