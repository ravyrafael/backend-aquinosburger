const mongoose = require('mongoose');

const Object = mongoose.model('Object')

module.exports = {
    async index(req, res) {
        const { page = 1} = req.query;

        const objects = await Object.paginate({}, { page, limit: 10 });

        return res.json(objects);
    },
    async detail(req, res) {
        const object = await Object.findById(req.params.id);

        return res.json(object);
    },
    async delete(req, res) {
        const object = await Object.deleteOne({ "_id": req.params.id });

        return res.json(object.n);
    },

    async store(req, res) {
        const object = await Object.create(req.body);
        return res.json(object)
    },

    async edit(req, res) {
        const object = await Object.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true });
        return res.json(object)
    }
}
