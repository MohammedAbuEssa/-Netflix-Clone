import React from "react";
import MovieList from "./MovieList";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import UpdateModel from "./UpdateModel";
function FavList() {
  const [moviesList, setMoviesList] = useState([]);
  const [show, setShow] = useState(false);
  const [clickedMovie, setClickedMovie] = useState({});
  const [update, setUpdate] = useState(false);
  const handleShow = (item) => {
    setShow(true);
    setClickedMovie(item);
    // handleAddtoFavList(item);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleUpdate = (item) => {
    handleShow(item);
    setClickedMovie(item);
  };
  const sendReq = async () => {
    const serverUrl = `${process.env.REACT_APP_SERVER_URL}getMovies`;
    const result = await axios.get(serverUrl);
    /* console.log(result.data);*/
    setMoviesList(result.data);
  };

  const handleDalete = async (item) => {
    try {
      const serverUrl = `${process.env.REACT_APP_SERVER_URL}DELETE/${item.id}`;
      const result = await axios.delete(serverUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sendReq();
  }, [moviesList]);

  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {moviesList.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${item.poster}`}
                />
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.overview}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDalete(item);
                  }}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  onClick={() => {
                    handleUpdate(item);
                  }}
                >
                  Update movie
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <UpdateModel
        moveShow={show}
        moveHide={handleClose}
        moveData={clickedMovie}
      />
    </>
  );
}

export default FavList;
