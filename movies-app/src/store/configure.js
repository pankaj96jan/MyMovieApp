import{createStore,combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import movieReducer from "../reducer/movieReducer"
import thunk from "redux-thunk"

const configureStore=()=>{

    const store= createStore(combineReducers({
        
        movies:movieReducer
        // filterMovies:filterMoviesReducer

    }),composeWithDevTools(
    applyMiddleware(thunk))
    )
    return store

}

export default configureStore