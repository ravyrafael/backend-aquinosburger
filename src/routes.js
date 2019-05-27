const express = require('express');

const routes = express.Router();

const ObjectController = require('./controllers/ObjectController');

//Rotas
routes.get('/objects',ObjectController.index);
routes.get('/object/:id',ObjectController.detail);
routes.delete('/object/:id',ObjectController.delete);
routes.post('/object',ObjectController.store);
routes.put('/object/:id',ObjectController.edit);
 module.exports = routes;