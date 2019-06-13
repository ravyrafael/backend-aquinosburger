const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ObjectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    trackcode:{
        type:String,
        required:true
    }
}, {
    timestamps:true
})

ObjectSchema.plugin(mongoosePaginate);

mongoose.model('Object', ObjectSchema)