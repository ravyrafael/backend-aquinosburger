const express = require('express');

const routes = express.Router();

const ObjectController = require('../controllers/ObjectController');
const HomeController = require('../controllers/HomeController');
//Rotas


routes.get('/',HomeController.index);



 module.exports = routes;