import axios from "axios";
import React from "react";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  const [moviesList, setMoviesList] = useState([]);
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}trending`;
    const result = await axios.get(serverUrl);
    console.log(result.data);
    setMoviesList(result.data);
  };

  useEffect(() => {
    sendReq();
  }, []);

  return <>{<MovieList dataTrending={moviesList} />}</>;
}

export default Home;
