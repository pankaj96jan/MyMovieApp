import React from 'react'
import MoviesContainer from './component/movieApp/MoviesContainer'
import Navbar from './component/Navbar'
import "./App.css"
const App = (props) => {
  return (
    <div className='container'>
      <Navbar />
      <MoviesContainer />
    </div>
  )
}

export default App


