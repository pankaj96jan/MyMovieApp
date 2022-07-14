import React from 'react'
import { useSelector } from 'react-redux'
import MoviesForm from './MoviesForm'
import MoviesList from './MoviesList'


const MoviesContainer = (props) => {
const movies=useSelector((state)=>{
    return state.movies
})

  return (
    <div className='row'>
        <h2 className='display-5'>Big Movies List-{movies.length} </h2>

      <div className="col-8"><MoviesForm/></div>
        
        <MoviesList/>

    </div>
  )
}

export default MoviesContainer