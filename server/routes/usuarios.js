import express from 'express';
import usersController from '../controllers/user.js';
const route = express.Router();

route.post('/', usersController.create);

route.get('/:id', usersController.getAll);

route.get('/', usersController.getOne);

route.put('/:id', usersController.update);

route.delete('/:id', usersController.delete);

export default route;

