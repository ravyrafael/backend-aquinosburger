const mongoose = require('mongoose');

const Object = mongoose.model('Object')

module.exports = {
    async index(req, res){
        const objects = await Object.find(); 

        return res.json(objects);
    },
    async detail(req, res){
        const object = await Object.findById(req.params.id);

        return res.json(object);
    },
    async delete(req, res){
        const object = await Object.deleteOne({"_id":req.params.id});

        return res.json(object.n);
    },

    async store(req,res){
        const object = await Object.create(req.body);
        return res.json(object)
    }
}