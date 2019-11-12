import React, { useState } from "react";
import Axios from "axios";
import { Modal, Button, Row, Col, Form, Spinner } from "react-bootstrap";
import ImageUploader from "react-images-upload";
import { updateUserProfile } from "../../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

function EditProfileModal(props) {
  const profileData = useSelector(state => state.user.userProfile);
  const dispatchRef = useDispatch();
  let userToken = localStorage.getItem("user-token");
  userToken = JSON.parse(userToken);
  const [inputs, setInputs] = useState({
    name: ""
  });
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

  const imgUpload = e => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dcft8yhab/upload";
    const CLOUDINARY_UPLOAD_PRESET = "qa4hsadk";
    setLoading(true);

    var file = e.target.files[0];
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
        setPicture(res.data.secure_url);
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };

  const imageSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const profileImg = { picture };
    console.log(picture);
    const url = "//localhost:5000/api/v1/users/editprofile/image";
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-token": userToken
      },
      data: profileImg,
      url
    };
    let submitted = await Axios(options);
    try {
      submitted = submitted.data[0];
      updateUserProfile(submitted, dispatchRef);
      setLoading(false);
      
    } catch (err) {
      console.log(
        `the profile image was not successflly updated from frontend: ${err}`
      );
    }
  };

  const nameSubmit = async e => {
    e.preventDefault();
    const { name } = inputs;
    const profileName = { profileName: name };
    const url = "//localhost:5000/api/v1/users/editprofile/name";
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-token": userToken
      },
      data: profileName,
      url
    };
    let submitted = await Axios(options);
    try {
      submitted = submitted.data[0];
      updateUserProfile(submitted, dispatchRef);
      setInputs({ ...inputs, name: "" });
    } catch (err) {
      console.log(
        `the profile name was not successflly updated from frontend: ${err}`
      );
    }
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
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="edit-profile-form-box">
          <div className="edit-profile-img-comtanier">
            <img src={profileData.profileImg} alt="" />
            <h5 className="user-name">{profileData.profileName}</h5>
          </div>
          <Form className="edit-profile-form">
            <Row
              style={{
                marginBottom: "4%",
                border: "1px dotted grey",
                padding: "4%"
              }}
            >
              <Col sm="3" style={{ color: "black" }}>
                Change Image:
              </Col>
              <Col>
                <input
                  style={{ width: "100%", color: "black" }}
                  type="file"
                  alt=""
                  onChange={imgUpload}
                />
              </Col>
              <Col sm="3">
                <div style={{ margin: "0 auto", width: "100px" }}>
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      type="submit"
                      onClick={imageSubmit}
                    >
                      Update
                    </Button>
                  )}
                </div>
              </Col>
            </Row>
            <Row style={{ border: "1px dotted grey", padding: "4%" }}>
              <Col sm="3" style={{ color: "black" }}>
                Change Username:
              </Col>
              <Col>
                <Form.Group controlId="">
                  <Form.Control
                    type="text"
                    name="name"
                    size="sm"
                    label="Change Username: "
                    className="edit-profile-field-inputs"
                    placeholder="New User Name"
                    value={inputs.name}
                    onChange={onChangeInput}
                  />
                </Form.Group>
              </Col>
              <Col sm="3">
                <div style={{ margin: "0 auto", width: "100px" }}>
                  <Button
                    variant="primary"
                    size="sm"
                    type="submit"
                    onClick={nameSubmit}
                  >
                    Update
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfileModal;
