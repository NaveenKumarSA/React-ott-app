import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieWrapper from "./MovieWrapper";
import { setFavoriteList } from "../api/favoriteListAction";

export default function MoviesList(props) {
  const [moviesTemp, setMoviesTemp] = useState([1, 2, 3, 4, 5]);
  const [favorites, setfavorites] = useState([]);
  const addFavoritesList = (prop) => {
    var newFavList; 
    if (prop.type === "add") {
      newFavList = [ prop.movie, ...favorites];
     }else{
       newFavList = favorites.filter(favorite => favorite !== prop.movie)
     }
      setfavorites(newFavList);
      setFavoriteList(newFavList)
  };

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=" + props.catagory + "&apikey=2026a61e")
      .then((res) => {
        setMoviesTemp(res.data.Search);
      })
  }, [props.catagory]);

  return (
    <div>
      <div className="container-fluid text-center">
        <p className="display-4">{props.catagory}</p>
      </div>
      <div className="d-flex flex-row bd-highlight space-left2 mb-3 movie-list-row">
        {moviesTemp.map((movie, key) => {
          return (
            <MovieWrapper
              addFavoritesList={addFavoritesList}
              key={key}
              movie={movie}
            />
          );
        })}
      </div>
    </div>
  );
}
