import { Grid } from '@mui/material'
import React from 'react'
import {useSelector} from "react-redux"
import MuiCard from './component/movieApp/MuiCard'

const MyMovies = () => {
  const wishyMovies=useSelector((state)=>(state.wishyMovies))
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {wishyMovies && wishyMovies.map((ele, i) => (
          <Grid item xs={2} sm={4} md={4} key={i}>
            <MuiCard  {...ele} />
          </Grid>
        ))}
      </Grid>
  )
}

export default MyMovies