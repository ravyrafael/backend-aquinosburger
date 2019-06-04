const mongoose = require('mongoose');

module.exports = {
    async index(req, res, next) {
        return res.status(200).send({
            message: "UHUL! The API is UP && RUNNING!"
        });

    }
}
