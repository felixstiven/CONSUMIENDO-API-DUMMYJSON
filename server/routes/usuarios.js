import express from 'express';
import usersController from '../controllers/user.js';
const route = express.Router();

route.post('/create', usersController.create);

route.get('/obtener', usersController.getAll);

route.get('/obtener/:id', usersController.getOne);

route.get('/nombre/:nombre', usersController.getFilter)

route.put('/actualizar/:id', usersController.update);

route.delete('/eliminar/:id', usersController.delete);

export default route;

