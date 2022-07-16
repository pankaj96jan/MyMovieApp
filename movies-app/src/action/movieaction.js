import axios from "axios";

export const startGetmovie = () => {
    return (dispatch) => {
        //ab hum api call karege

        axios
            .get("/api/movie")
            .then((response) => {
                const movieData = response.data;
                dispatch(addMovie(movieData));
            })

            .catch((error) => {
                alert(error.message);
            });
    };
};

export const startSetMovie = (formData) => {
    return (dispatch) => {
        axios
            .post("/api/movie", formData)
            .then((response) => {
                const movieDetails = response;
                dispatch(setMovie(movieDetails));
            })

            .catch((error) => {
                alert(error.message);
            });
    };
};

export const wishMovies = (id) => {
    return (dispatch) => {
        axios
            .get(`/api/movie/wishy/${id}`)
            .then((response) => {
                const wishyMovie = response.data;
                dispatch(wishlistMovies(wishyMovie));
            })

            .catch((error) => {
                alert(error.message);
            });
    };
};

export const setMovie = (movieData) => {
    return {
        type: "SET_MOVIE",
        payload: movieData,
    };
};

export const addMovie = (movieData) => {
    return {
        type: "ADD_MOVIE",
        payload: movieData,
    };
};
export const wishlistMovies = (wishy) => {
    return {
        type: "WISHlIST_MOVIE",
        payload: wishy,
    };
};
