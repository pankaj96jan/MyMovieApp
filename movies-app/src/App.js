import React from 'react'
import MoviesContainer from './component/movieApp/MoviesContainer'
import Navbar from './component/Navbar'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import MoviesForm from './component/movieApp/MoviesForm'
import MyMovies from './MyMovies'
import MoviesThisWeek from './MoviesThisWeek'
import Login from "./component/movieApp/Login"
import Signup from "./component/movieApp/Signup"

const App = (props) => {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<MoviesContainer />} />
        <Route exact={true} path='/addmovie' element={<MoviesForm />} />
        <Route exact={true} path='/wishlist' element={<MyMovies />} />
        <Route exact={true} path='/thisweekend' element={<MoviesThisWeek />} />
        <Route exact={true} path='/login' element={<Login />} />
        <Route exact={true} path='/signup' element={<Signup />} />

      </Routes>
    </div>
  )
}

export default App


