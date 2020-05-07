import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Row, Col, Form, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function AddCollectionModal(props) {
  let userToken = localStorage.getItem("user-token");
  userToken = JSON.parse(userToken);
  const [inputs, setInputs] = useState({
    name: ""
  });
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);

  const onDrop = e => {
    var files = e[0];
    var formData = new FormData();
    formData.append("file", files);
    setPictures(formData);
    console.log(pictures);
    console.log(formData);
  };
  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };
  const formSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const { name } = inputs;
    const receiptName = name;
    const imgFilePaths = pictures;

    const collectionData = {
      receiptName,
      imgFilePaths,
    };

    console.log(collectionData);
    console.log(userToken);
    const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users/newreceipts`;
    const headers = {
      headers: {
        "user-token": userToken,
        'content-type': 'multipart/form-data',
      }
    };

    axios.post(url, collectionData, headers).then(res => {
      console.log(res);
      // // I'm making a push to /login because I know it'll be redirected back to dashboard.
      // // I'm smart, aren't I?😁
      // props.history.push("/login")
      setLoading(false)
    });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: "100000" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Collection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="add-collection-form-box">
          <Form>
            <Form.Group controlId="">
              <Form.Control
                type="text"
                name="name"
                size="lg"
                className="add-collection-field-inputs"
                placeholder="Collection Name.."
                value={inputs.email}
                onChange={onChangeInput}
              />
            </Form.Group>

            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
            <div style={{ margin: "0 auto", width: "40px" }}>
              {loading ? (
                <Spinner animation="border" size="sm" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <p></p>
              )}
            </div>
            <div style={{ margin: "0 auto", width: "100px" }}>
              {loading ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  onClick={formSubmit}
                >
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withRouter(AddCollectionModal);
