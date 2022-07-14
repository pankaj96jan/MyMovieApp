import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetmovie } from "../../action/movieaction";
import MuiCard from "./MuiCard"

const MoviesList = (props) => {
const dispatch=useDispatch()
  const movies = useSelector(state => state.movies[0]);
   console.log(movies)



  useEffect(()=>{
    // action creator ko bulana he
    
    dispatch(startGetmovie())
    
    },[dispatch])


  return (
    <div >
      <h2>Listing Movies</h2>
      {movies&&
     <div className="row"> {movies.map(ele=><MuiCard  key={ele._id} {...ele}/>)}</div>
      }
    </div>
  );
};

export default MoviesList;





