const Movie = require("../models/moviesModel");

const movieCltr = {};

// create movie form
movieCltr.create = (req, res) => {
  const body = req.body;
  const movie = new Movie(body);
  movie
    .save()
    .then((movie) => {
      res.json(movie);
    })
    .catch((error) => {
      res.json(error);
    });
};

//list all movie
movieCltr.list = (req, res) => {
  Movie.find()
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
};

// for finding id
movieCltr.show = (req, res) => {
  const id = req.params.id;
  Movie.findById(id)
    .then((movie) => {
      res.json(movie);
    })
    .catch((error) => {
      res.json(error);
    });
};

//for updating movie id
movieCltr.update = (req, res) => {
  const id = req.params.id;
  Movie.findByIdAndUpdate(id, req.body, { new: true })
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
};

movieCltr.destory = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Movie.findByIdAndDelete(id)
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = movieCltr;
