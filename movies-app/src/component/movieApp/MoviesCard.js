import React from "react";

const MoviesCard = (props) => {
  const {name,rating,poster}=props

  return (
<div className="col lg-3">
<div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={poster} alt=""/>
  <div className="card-body">
    <h5 className="card-title">Movie Name-{name} </h5>
    <p className="card-text"> IMDB Rating-{rating}</p>
  </div>
</div>
</div>
  )
};

export default MoviesCard;








//  https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Avatar_The_Way_of_Water_poster.jpg/220px-Avatar_The_Way_of_Water_poster.jpg
