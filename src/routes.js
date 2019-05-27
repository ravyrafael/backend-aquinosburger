const express = require('express');

const routes = express.Router();

const ObjectController = require('./controllers/ObjectController');

//Rotas
routes.get('/objects',ObjectController.index);

 module.exports = routes;