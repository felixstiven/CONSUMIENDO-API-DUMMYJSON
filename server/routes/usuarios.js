import express from 'express';
import usersController from '../controllers/user.js';
const route = express.Router();
import fileUpload from 'express-fileupload';

route.post('/create',  fileUpload({
                        useTempFiles:true,
                        tempFileDir:'./uploads',
                        }),  usersController.create);

route.get('/', usersController.getAll);

route.get('/:id', usersController.getOne);

route.get('/filter/:nombre', usersController.getFilter)

route.put('/:id', usersController.update);

route.delete('/:id', usersController.delete);

export default route;

