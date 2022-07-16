const mongoose = require("mongoose");

const wishySchema = mongoose.Schema;
const wishyMovieSchema = new wishySchema({
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
    color: {
        type: String,
        default: "error"
    }
    // Movie: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Movie",
    // } 
})

const wishyMovie = mongoose.model("wishyMovie", wishyMovieSchema);

module.exports = wishyMovie;
