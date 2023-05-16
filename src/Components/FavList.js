import React from "react";
import MovieList from "./MovieList";
import axios from "axios";
import { useState, useEffect } from "react";
function FavList() {
  const [moviesList, setMoviesList] = useState([]);

  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getMovies`;
    const result = await axios.get(serverUrl);
    console.log(result.data);
    setMoviesList(result.data);
  };
  useEffect(() => {
    sendReq();
  }, []);

  return (
    <>
      <MovieList dataTrending={moviesList} />
    </>
  );
}

export default FavList;
