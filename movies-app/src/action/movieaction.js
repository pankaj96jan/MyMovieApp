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

export const wishMovies = (movieData) => { //yha se hum wishy k backend ko denge
    console.log(movieData, "movie action");
    return (dispatch) => {
        axios
            .post(`/api/movie/wishy`, movieData)
            .then((response) => {
                const wishyMovie = response.data;
                dispatch(wishlistMovies(wishyMovie));
            })

            .catch((error) => {
                alert(error.message);
            });
    };
};

export const startDeleteMovie = (id) => { //yha se hum wishy k backend ko denge
    return (dispatch) => {
        axios
            .delete(`/api/movie/${id}`)
            .then((response) => {
                dispatch(deleteMovie())
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

export const deleteMovie = (wishy) => {
    return {
        type: "DELETE_MOVIE",
    };
};

