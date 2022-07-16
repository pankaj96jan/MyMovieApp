import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import movieReducer from "../reducer/movieReducer"
import thunk from "redux-thunk"
import { wishyMovieReducer } from "../reducer/WishyMovieReducer"

const configureStore = () => {

    const store = createStore(combineReducers({

        movies: movieReducer,
        wishyMovies: wishyMovieReducer
        // filterMovies:filterMoviesReducer

    }), composeWithDevTools(
        applyMiddleware(thunk))
    )
    return store

}

export default configureStore