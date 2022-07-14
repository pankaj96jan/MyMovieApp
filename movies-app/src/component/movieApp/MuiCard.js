import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Rating } from '@mui/material';


export default function MuiCard(props) {
const {name,rating,poster}=props
const [toggle, setToggle] = React.useState("disabled")

const handleToggle=()=>{
 if (toggle==="disabled"){
    setToggle("error")
 }else{
    setToggle("disabled")
 }
}



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"   
        height="394"
        image={poster}
        alt="Paella dish"
      />
      <CardContent>    
        <Typography variant="h5" color="text.secondary"> movie name-{name}
        </Typography> 
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  onClick={handleToggle} aria-label="add to favorites">
          <FavoriteIcon color={toggle}  />
        </IconButton>
        <Typography variant="h6">IMBD rating<Rating name="read-only" value={rating/2} readOnly /></Typography>
      </CardActions>
    </Card>
  );
}
