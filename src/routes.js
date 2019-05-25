const express = require('express');

const routes = express.Router();
//Rotas
routes.get('/',(req, res)=>{
    Object.create({
        tittle:"Minoxidil",
        description:"Compra 1",
        trackcode:"1",
 
    })
     return res.send('Hello');
 });

 module.exports = routes;