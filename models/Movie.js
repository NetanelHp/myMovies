const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
