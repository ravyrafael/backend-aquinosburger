const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserTypeSchema = new mongoose.Schema({
  Constant: {
    type: String,
    required: true
  }
})

UserTypeSchema.plugin(mongoosePaginate);
mongoose.model('UserType', UserTypeSchema)