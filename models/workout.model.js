const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "There has to be a name"
  },
  sport: {
    type: String,
    trim: true,
    required: "There has to be a sport"
  },
  type: {
    type: String,
    trim: true,
    required: "There has to be a type"
  },
  category: {
    type: String,
    trim: true,
    required: "There has to be a category"
  },
  reps: {
    type: Number,
    trim: true,
    default: null 
  },
  duration: {
    type: Number,
    trim: true,
    default: null
  },
  sets: {
    type: Number,
    trim: true,
    default: null
  },
  video_url: {
    type: String,
    trim: true,
    required: "There has to be a video_url"
  },
  description: {
    type: String,
    trim: true,
    required: "There has to be a description"
  },
  icon_url: {
    type: String,
    trim: true,
    required: "There has to be a icon"
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
