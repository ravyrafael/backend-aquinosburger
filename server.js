const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

//Iniciando app
const app = express();

//Iniciando Banco de dados
mongoose.connect(
    'mongodb+srv://Deploy:ekariuber321@personal-tracker-wlmph.mongodb.net/test?retryWrites=true'
,{ useNewUrlParser: true,
    dbName:'Personal-Tracker-Dev'
 });

//Models
requireDir('./src/models');


app.use('/api', require('./src/routes'));



app.listen(3001);