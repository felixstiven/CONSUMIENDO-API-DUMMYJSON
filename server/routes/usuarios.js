import express from 'express';
import usersController from '../controllers/user.js';
const route = express.Router();

route.post('/', usersController.create);

route.get('/', usersController.getAll);

route.get('/:id', usersController.getOne);

route.put('/:id', usersController.update);

route.delete('/:id', usersController.delete);

export default route;

