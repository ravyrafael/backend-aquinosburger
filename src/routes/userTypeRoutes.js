const express = require('express');
const Routes = express.Router();

const ObjectController = require('../controllers/userTypeController');
//Rotas
Routes.get('/',ObjectController.index);
Routes.get('/:id',ObjectController.detail);
Routes.delete('/:id',ObjectController.delete);
Routes.post('',ObjectController.store);
Routes.put('/:id',ObjectController.edit);

 module.exports = Routes;