const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema({
    tittle:{
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
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

mongoose.model('Object', ObjectSchema)