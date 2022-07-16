const wishyMovie = require("../models/wishyMovieModel");

const wishyMovieCltr = {};


// create wishyMovie form
wishyMovieCltr.create = (req, res) => {
    const body = req.body;
    const wishyMovies = new wishyMovie(body);
    wishyMovies
        .save()
        .then((wishyMovie) => {
            res.json(wishyMovie);
        })
        .catch((error) => {
            res.json(error);
        });
};

//list all wishyMovie
wishyMovieCltr.list = (req, res) => {
    wishyMovie.find()
        .then((wishyMovie) => {
            res.json(wishyMovie)
        })
        .catch((err) => {
            res.json(err.stack);
        });
};

// for finding id
wishyMovieCltr.show = (req, res) => {
    const id = req.params.id;
    wishyMovie.findById(id)
        .then((wishyMovie) => {
            res.json(wishyMovie);
        })
        .catch((error) => {
            res.json(error);
        });
};

//for updating wishyMovie id
wishyMovieCltr.update = (req, res) => {
    const id = req.params.id;
    wishyMovie.findByIdAndUpdate(id, req.body, { new: true })
        .then((wishyMovie) => {
            res.json(wishyMovie);
        })
        .catch((err) => {
            res.json(err);
        });
};

wishyMovieCltr.destory = (req, res) => {
    const id = req.params.id;
    console.log(id);
    wishyMovie.findByIdAndDelete(id)
        .then((wishyMovie) => {
            res.json(wishyMovie);
        })
        .catch((err) => {
            res.json(err);
        });
};

module.exports = wishyMovieCltr;
