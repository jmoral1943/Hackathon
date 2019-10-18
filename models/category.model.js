const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "There has to be a Category name"
  },
  sport: {
    type: String,
    trim: true,
    required: "There has to be sport associated"
  },
  icon_url: {
    type: String,
    trim: true,
    required: "There has to be a Category Icon"
  }
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category