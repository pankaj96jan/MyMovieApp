import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startSetMovie } from "../../action/movieaction";
import "./MoviesForm.css"

const MoviesForm = () => {
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");

  const dishpatch = useDispatch();

  const handleSubmit = (e) => {
    // e.preventDefault();

    const formData = {
      name: movieName,
      rating,
      poster,
    };
    dishpatch(startSetMovie(formData));
    window.location.reload();
    window.location.replace('/');

  };

  return (
    <Box sx={{ mx: "auto" }}>

      <Typography variant="h3" sx={{ fontFamily: "Roboto" }}>Add Movie</Typography>
      <form >
        <label>Movie Name</label><br />
        <TextField
          type="text"
          value={movieName}
          placeholder="Enter Movie Name"
          onChange={(e) => setMovieName(e.target.value)}
        >

        </TextField>
        <br />

        <label>IMDB Rating</label><br />
        {rating < 10 ? (
          <TextField
            type="text"
            value={rating}
            placeholder="Rating The Movie"
            onChange={(e) => setRating(e.target.value)}
          />
        ) : (
          alert("Maximum Rating point is 10")
        )}

        <br />

        <label>Movie poster</label><br />
        <TextField
          type="text"
          value={poster}
          placeholder="Enter Movie Link"
          onChange={(e) => setPoster(e.target.value)}
        />
        <br />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </Box >
  );
};

export default MoviesForm;
