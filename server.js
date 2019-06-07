
if (process.env.BUILD_TYPE === "dev") {
    require('dotenv').config();
}
const express = require('express');
const requireDir = require('require-dir');
const mongoose = require('mongoose');
const cors = require('cors');


//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando Banco de dados
mongoose.connect(
    process.env.MONGO_URL
    , {
        useNewUrlParser: true,
        dbName: process.env.DATABASE
    });

//Models
requireDir('./src/models');

app.use('/', require('./src/routes/homeRoutes'));
app.use('/api', require('./src/routes'));
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.status(err.status || 500).json({ err: err.message });
});


app.listen(process.env.PORT); 