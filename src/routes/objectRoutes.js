const express = require('express');

const Routes = express.Router();

const ObjectController = require('../controllers/ObjectController');
//Rotas
Routes.get('/',ObjectController.index);
Routes.get('/:id',ObjectController.detail);
Routes.delete('/:id',ObjectController.delete);
Routes.post('',ObjectController.store);
Routes.put('/:id',ObjectController.edit);




 module.exports = Routes;