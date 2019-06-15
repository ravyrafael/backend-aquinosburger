const express = require('express');

const Routes = express.Router();

const ObjectController = require('../controllers/UserController');
//Rotas
Routes.get('/',ObjectController.index);
Routes.get('/:id',ObjectController.detail);
Routes.delete('/:id',ObjectController.delete);
Routes.post('',ObjectController.store);
Routes.put('/:id',ObjectController.edit);

//Routes.use("/type", require("./userTypeRoutes.js"));


 module.exports = Routes;