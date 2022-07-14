import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startSetMovie } from "../../action/movieaction";

const MoviesForm = (props) => {
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
  };

  return (
    <div>
      <h2>MoviesForm</h2>

      <form onSubmit={handleSubmit}>
        <label>Movie Name</label>
        <input
          type="text"
          value={movieName}
          placeholder="Enter Movie Name"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <br />

        <label>IMDB Rating</label>
        {rating < 10 ? (
          <input
            type="text"
            value={rating}
            placeholder="Rating The Movie"
            onChange={(e) => setRating(e.target.value)}
          />
        ) : (
          alert("Maximum Rating point is 10")
        )}

        <br />

        <label>Movie poster</label>
        <input
          type="text"
          value={poster}
          placeholder="Enter Movie Link"
          onChange={(e) => setPoster(e.target.value)}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default MoviesForm;
