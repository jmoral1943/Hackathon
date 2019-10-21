const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const sportSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  organization: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  color: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
})

const Sport = mongoose.model('Sport', sportSchema)

module.exports = Sport;