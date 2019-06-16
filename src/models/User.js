const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
//const UserType = require('./UserType');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    TypeUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType',
        required: true
    }
}, {
        timestamps: true
    })

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema)