import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function ModalMovie(props) {
  const saveTofaverote = () => {};

  return (
    <>
      <Modal show={props.moveShow} onHide={props.moveHide}>
        <Modal.Header closeButton>
          <img variant="top" src={props.moveShow.poster} />
          <Modal.Title>{props.moveData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.moveData.overview}</p>
        </Modal.Body>
        <input placeholder="Add your comment here" />
        <Modal.Footer>
          <Button variant="secondary" onClick={props.moveHide}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMovie;
