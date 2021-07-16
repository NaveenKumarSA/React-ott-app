import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieWrapper from "./MovieWrapper";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import {  setFavoriteList } from "../api/favoriteListAction";

export default function MoviesList() {
  const [searchValue, setSearchValue] = useState("avengers");
  const [moviesTemp, setMoviesTemp] = useState([]);
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
  const handleSearch = (value ="all") => {
    console.log(value);
    setSearchValue(value);
  };
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=2026a61e`)
      .then((res) => {
        if (res.data.Response) setMoviesTemp(res.data.Search);
        console.log(res.data);
      })
  }, [searchValue]);

  return (
    <div>
      <div className="container center">
        <div class="input-group flex-nowrap">
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">
              <SearchRoundedIcon />
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Search here ..."
            aria-label="Username"
            aria-describedby="addon-wrapping"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
   {/*    {!moviesTemp &&
      <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%;"></div>
    </div> } */}
      {moviesTemp &&  (
        <div className="searchWrapper">
          <div className="container text-capitalize display-3 m-2"></div>
            {" "}
            <div className="d-flex flex-row bd-highlight space-left2 mb-3 movie-list-row">
              {moviesTemp.map((movie, key) => {
                return <MovieWrapper addFavoritesList={addFavoritesList} key={key} movie={movie} />;
              })}
            </div>
          
        </div>
      )}
    </div>
  );
}
