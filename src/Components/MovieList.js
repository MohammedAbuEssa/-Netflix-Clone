import React from "react";
import Movie from "./Movie";
import axios from "axios";
import { useState, useEffect } from "react";

function MovieList(props) {
  return (
    <>
      <Movie dataFromHome={props.dataTrending}></Movie>
    </>
  );
}

export default MovieList;
