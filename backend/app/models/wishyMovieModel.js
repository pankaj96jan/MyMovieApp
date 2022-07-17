const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const wishyMovieSchema = new Schema({
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
    // color: {
    //     type: String,
    //     default: "error",
    // },
    // Movie:[ {
    //     type: Schema.Types.ObjectId,
    //     ref: "Movie",
    //     // required:true
    // }]
})

const wishyMovie = mongoose.model("wishyMovie", wishyMovieSchema);

module.exports = wishyMovie;
