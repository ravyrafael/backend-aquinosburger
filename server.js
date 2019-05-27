require('dotenv').config();
const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cors = require('cors');



//Iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando Banco de dados
mongoose.connect(
    process.env.MONGO_URL
,{ 
    useNewUrlParser: true,
    dbName:process.env.DATABASE
 });

//Models
requireDir('./src/models');


app.use('/api', require('./src/routes'));


app.listen(process.env.PORT);