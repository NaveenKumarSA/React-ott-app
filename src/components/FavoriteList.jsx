import React, { useEffect, useState } from "react";
import MovieWrapper from "./MovieWrapper";
import { getFavoriteList, setFavoriteList } from "../api/favoriteListAction";
var newFavList;
export default function FavoriteList(props) {
  const [moviesTemp, setMoviesTemp] = useState([1, 2, 3, 4, 5]);
  const [favorites, setfavorites] = useState([]);
  const addFavoritesList = (prop) => {
    /* if (prop.type === "add") {
       newFavList = [...favorites, prop.movie];
      }else{  } */
    newFavList = favorites.filter((favorite) => favorite !== prop.movie);

    setfavorites(newFavList);
    setFavoriteList(newFavList);
  };
  setInterval(() => {
    setMoviesTemp(getFavoriteList())
  }, 3000);

  useEffect(() => {
    setMoviesTemp(getFavoriteList())
  }, []);

  return (
    <div>
      {moviesTemp && (
        <>
          <div className="container-fluid text-center">
            <p className="display-4">Favorite List</p>
          </div>
          <div className="d-flex flex-row bd-highlight space-left2 mb-3 movie-list-row">
            {moviesTemp.map((movie, key) => {
              return (
                <MovieWrapper
                  addFavoritesList={addFavoritesList}
                  key={key}
                  movie={movie}
                  fav={true}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
