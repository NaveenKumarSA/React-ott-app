import React, {  useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";
export default function MovieWrapper({...props}) {
  const movie = props.movie;
  const [favorite, setfavorite] = useState(props.fav ? true : false);
  const handleFavorite = ({...prop}) => {
      props.addFavoritesList(prop)
      setfavorite(favorite ? false : true);
  };
  return (
    <div className="card movie-card" id={movie.imdbID}>
      <img
        src={movie.Poster}
        className="card-img-top image-tag"
        alt={movie.Title}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <div className="btn-group movie-card-btn-grp">
          <Button
            variant="contained"
            color=""
            href="/player"
          >
            Preview
          </Button>
          <Button variant="contained" color="">
            Play
          </Button>
          <Button variant="" >
            {favorite ? (
              <FavoriteIcon className="red-heart" onClick={() => handleFavorite({type:"remove", movie})} />
            ) : (
              <FavoriteBorderIcon
                onClick={() => handleFavorite({type:"add", movie})}
              />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
