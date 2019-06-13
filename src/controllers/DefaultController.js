const mongoose = require('mongoose');

const h = require('../helper/defaultHelper');

const verificaConfig =  function(cnfInput) {
    let newConfig = cnfInput===null ? {} : cnfInput;

    if(!newConfig.hasOwnProperty('index'))
        newConfig.index = {
            query : {},
            options: { limit: 10 }
        };

    if(!newConfig.hasOwnProperty('detail'))
        newConfig.detail = {};

    if(!newConfig.hasOwnProperty('delete'))
        newConfig.delete = {
            conditions : { "_id": null },
            callback: null
        };

    if(!newConfig.hasOwnProperty('store'))
        newConfig.store = {};

    if(!newConfig.hasOwnProperty('edit'))
        newConfig.edit = {
            conditions: { "_id": null },
            options: { new: true }
        };

    return newConfig;
};

const BaseController = function(documento, config) {
    let _documento = documento;
    let _config = verificaConfig(config);

    const Object = mongoose.model(_documento);

    return {
        async index(req, res) {
            let { page = 1} = req.query;
            _config.index.options.page = page;

            const objects = await Object.paginate(_config.index.query, _config.index.options);
    
            return res.json(objects);
        },
        async detail(req, res) {
            const object = await Object.findById(req.params.id);
    
            return res.json(object);
        },
        async delete(req, res) {
            _config.delete.conditions._id = req.params.id;
            const object = await Object.deleteOne(_config.delete.conditions);
    
            return res.json(object.n);
        },
    
        async store(req, res) {
            const object = await Object.create(req.body);
            return res.json(object)
        },
    
        async edit(req, res) {
            _config.edit.conditions._id = req.params.id;
            const object = await Object.findOneAndUpdate(_config.edit.conditions, req.body, _config.edit.options);
            return res.json(object)
        }
    }
}

module.exports = { create: BaseController };
// {
    
//     async index(req, res) {
//         const { page = 1} = req.query;

//         const objects = await Object.paginate({}, { page, limit: 10 });

//         return res.json(objects);
//     },
//     async detail(req, res) {
//         const object = await Object.findById(req.params.id);

//         return res.json(object);
//     },
//     async delete(req, res) {
//         const object = await Object.deleteOne({ "_id": req.params.id });

//         return res.json(object.n);
//     },

//     async store(req, res) {
//         const object = await Object.create(req.body);
//         return res.json(object)
//     },

//     async edit(req, res) {
//         const object = await Object.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true });
//         return res.json(object)
//     }
// }