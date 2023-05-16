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
          <Modal.Title>{props.moveData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.moveData.overview}</p>
        </Modal.Body>
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
