import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import MoviesForm from "./MoviesForm";
import MoviesList from "./MoviesList";

const MoviesContainer = (props) => {
  const movies = useSelector((state) => {
    return state.movies;
  });

  return (
    <div className="row">
      <Typography variant="h4" sx={{ fontFamily: "Roboto" }}>
        Movies List-<b>{movies.length}</b>
      </Typography>
      <MoviesList />
    </div>
  );
};

export default MoviesContainer;
