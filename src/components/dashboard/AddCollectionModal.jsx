import React, { useState } from "react";
import Axios from "axios";
import { Modal, Button, Row, Col, Form, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { useSelector } from "react-redux";

function AddCollectionModal(props) {
  let userToken = localStorage.getItem("user-token")
  userToken = JSON.parse(userToken)
  const [inputs, setInputs] = useState({
    name: ""
  });
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const onDrop = picture => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcft8yhab/upload";
    const CLOUDINARY_UPLOAD_PRESET = "qa4hsadk";
    setLoading(true);
    picture.map(file => {
      var formData = new FormData();

      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      Axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "applicaction/x-www-form-urlencoded"
        },
        data: formData
      })
        .then(res => {
          console.log(res);
          setPictures(pictures.push(res.data.secure_url));
          console.log(pictures);
          setLoading(false);
        })
        .catch(err => console.log(err));
      // console.log(file)
    });
  };
  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };
  const formSubmit = e => {
    e.preventDefault();
    const { name } = inputs;
    const receiptName = name
    const receiptImg = pictures;
    console.log(pictures)
    const collectionData = {
      receiptName: receiptName,
      receiptImg: receiptImg
    };

    console.log(collectionData);
    console.log(userToken)
    const url = "//localhost:5000/api/v1/users/addreceipt";
    const options = {
      method : 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-token": userToken
      },
      data: collectionData,
      url

    }
    Axios(
      options
      
    ).then(res => {
      console.log(res);
    });
    // props.history.push("/dashboard")
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{zIndex:"100000"}}
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

export default AddCollectionModal;
