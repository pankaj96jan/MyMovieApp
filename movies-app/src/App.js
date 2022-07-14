import React from 'react'
import MoviesContainer from './component/movieApp/MoviesContainer'
import Navbar from './component/Navbar'
const App = (props) => {
  return (
    <div className='container'>
      <Navbar />
      <h2 className='display-3'>Movies App</h2>

      <MoviesContainer/>
    </div>
  )
}

export default App


