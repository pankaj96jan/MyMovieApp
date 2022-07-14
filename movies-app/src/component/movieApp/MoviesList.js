import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetmovie } from "../../action/movieaction";
import MuiCard from "./MuiCard"

const MoviesList = (props) => {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies[0]);
  console.log(movies)



  useEffect(() => {
    // action creator ko bulana he

    dispatch(startGetmovie())

  }, [dispatch])


  return (
    <div >
      <h2>Listing Movies</h2>
      <Grid container spacing={{ xs: 2, md:3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {movies && movies.map(ele => (
          <Grid item xs={2} sm={4} md={4} key={ele._id}>
            <MuiCard  {...ele} />
          </Grid>
        ))}
      </Grid>

    </div>
  );
};

export default MoviesList;





