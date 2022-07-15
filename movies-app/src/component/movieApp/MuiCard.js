import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { wishMovies } from '../../action/movieaction';
import EventIcon from '@mui/icons-material/Event';
import BasicDateTimePicker from './BasicDateTimePicker';

export default function MuiCard(props) {
  const dispatch = useDispatch()

  const { name, rating, poster, _id } = props
  const [toggle, setToggle] = React.useState("disabled")

  const handleToggle = () => {
    if (toggle === "disabled") {
      dispatch(wishMovies(_id))
      setToggle("error")
    } else {
      setToggle("disabled")
    }
  }

  const handleThisWeek = () => {
    return <BasicDateTimePicker/>
  }



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="394"
        image={poster}
        alt="Paella dish"
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" sx={{ fontFamily: "Roboto" }} color="grey">{name}
        </Typography>
        <IconButton onClick={handleThisWeek}><EventIcon/></IconButton>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton onClick={handleToggle} aria-label="add to favorites">
          <FavoriteIcon color={toggle} />
        </IconButton>
        <Typography sx={{ mx: "auto" }} variant="h6">IMBD-{rating}/10</Typography><Rating sx={{ mx: "auto" }} name="read-only" precision={0.5} value={rating / 2} readOnly />
      </CardActions>
    </Card>
  );
}
