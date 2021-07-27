import React from 'react'
export function  setFavoriteList(list){
    console.log("before session",list)
    sessionStorage.setItem("FavoriteList", JSON.stringify(list));
}
export function getFavoriteList() {
    var favoriteListJson = sessionStorage.getItem("FavoriteList");
    var favoriteList = JSON.parse(favoriteListJson);
    return favoriteList;
  }
export default function favoriteListAction() {
    return (
        <div></div>
    )
}
