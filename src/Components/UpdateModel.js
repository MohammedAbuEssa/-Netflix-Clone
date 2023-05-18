import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

function UpdateModel(props) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      title: e.target.name.value,
      release_date: e.target.release.value,
      poster_path: e.target.poster.value,
      overview: e.target.overview.vale,
      comment: e.target.comment.value,
    };
    const serverURL = `${process.env.REACT_APP_SERVER_URL}UPDATE/${props.moveData.id}`;
    const axiosRes = await axios.put(serverURL, obj);
    props.moveHide();
    console.log(axiosRes);
  };
  return (
    <>
      <>
        <Modal show={props.moveShow} onHide={props.moveHide}>
          <Modal.Header closeButton>
            <Modal.Title>Update Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Movie Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="name"
                    defaultValue={props.moveData.name}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie release</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="release"
                    defaultValue={props.moveData.release}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie poster</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="poster"
                    defaultValue={props.moveData.poster}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Movie overview</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="overview"
                    defaultValue={props.moveData.overview}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    name="comment"
                    defaultValue={props.moveData.comment}
                  />
                </InputGroup>
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.moveHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default UpdateModel;
