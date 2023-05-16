import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ModalMovie from "./ModalMovie";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Movie(props) {
  const [clickedMovie, setClickedMovie] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = (item) => {
    setShow(true);
    setClickedMovie(item);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {props.dataFromHome.map((item, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.overview}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow(item);
                  }}
                >
                  Add to favorite
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <ModalMovie
        moveShow={show}
        moveHide={handleClose}
        moveData={clickedMovie}
      />
    </>
  );
}

export default Movie;
