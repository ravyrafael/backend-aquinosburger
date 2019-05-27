const mongoose = require('mongoose');

const Object = mongoose.model('Object')

module.exports = {
    async index(req, res){
        const objects = await Object.find(); 

        return res.json(objects);
    }
}