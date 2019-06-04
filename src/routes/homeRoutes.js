const express = require('express');

const routes = express.Router();

const HomeController = require('../controllers/HomeController');
//Rotas


routes.get('/',HomeController.index);



 module.exports = routes;