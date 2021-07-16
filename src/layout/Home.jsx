import React from "react";
import HeaderTag from "../components/HeaderTag"
import SearchMovieList from "../components/SearchMovieList"
import MoviesList from "../components/MoviesList"
import FavoriteList from "../components/FavoriteList";



export default function Home() {
  
  return (
    <div>
      <section>
        <HeaderTag />
      </section>
      <section>
        <SearchMovieList />
      </section>
      <section>
        <FavoriteList/>
      </section>
      <section>
        <MoviesList catagory="English" />
      </section>
      <section>
        <MoviesList catagory="Hindi" />
      </section>
      <section>
        <MoviesList catagory="Tamil" />
      </section>
    </div>
  );
}
