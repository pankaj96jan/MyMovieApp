const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please Write Movie Name"],
  },
  rating: {
    type: Number,
    required: [true, "Please Write Movie Rating"],
  },
  poster: {
    type: String,
    required: [true, "Please Fill  Movie Poster"],
  },
});
//create a model for Ticket
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
