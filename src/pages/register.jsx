import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {Redirect} from "react-router-dom"
import { registerUser } from "../actions/userActions";
import "./css/forms.css";

const Register = props => {
  const dispatchRef = useDispatch();
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };

  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState('');
  
  const closeToast = () => {
    setShowErrorToast(false)
  }

  const onSubmit = async e => {
    e.preventDefault();
    if(!inputs.firstname){
      setShowErrorMessage("A valid Firstname input is required!");
      setShowErrorToast(!showErrorToast);
      return
    }else if(!inputs.lastname){
      setShowErrorMessage("A valid Lastname input is required!");
      setShowErrorToast(!showErrorToast);
      return
    }else if(!inputs.email){
      setShowErrorMessage("A valid Email input is required!");
      setShowErrorToast(!showErrorToast);
      return
    }else if(!inputs.phoneNumber){
      setShowErrorMessage("A valid Phone Number input is required!");
      setShowErrorToast(!showErrorToast);
      return
    }else if(!inputs.password){
      setShowErrorMessage("A valid Password input is required!");
      setShowErrorToast(!showErrorToast);
      return
    }else if(!inputs.confirmPassword){
      setShowErrorMessage("Please Confirm Password input field cannot be left blank!");
      setShowErrorToast(!showErrorToast);
      return
    }

    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      password,
      confirmPassword
    } = inputs;
    const registerData = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    };
    if (password != confirmPassword) {
      setShowErrorMessage("The confirm password doesn't match the main password field")
      setShowErrorToast(!showErrorToast)
      return;
    }
    const emailPattern= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(email)){
      setShowErrorMessage("The Email provided is not a valid email address")
      setShowErrorToast(!showErrorToast)
      return;
    }
    console.log(registerData);
    registerUser(registerData, dispatchRef);
    return(
      <Redirect to="/dashboard"/>
    )
  };

  return (
    <div className="registration-login-page-container">
      <Row>
        <Col
          sm="5"
          className="d-none d-md-block"
          style={{
            height: "90vh",
            borderTopRightRadius: "45%",
            overflow: "hidden"
          }}
        >
          <img
            width="100%"
            height="100%"
            src="https://res.cloudinary.com/dcft8yhab/image/upload/v1573588622/undraw_jason_mask_t07o.png"
          />
        </Col>
        <Col>
          <div className="form-box">
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              Sign Up.
            </h1>
            <Form>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="text"
                  name="firstname"
                  size="lg"
                  placeholder="First Name..."
                  value={inputs.firstname}
                  onChange={onChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="text"
                  name="lastname"
                  size="lg"
                  placeholder="Last Name..."
                  value={inputs.lastname}
                  onChange={onChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="email"
                  name="email"
                  size="lg"
                  placeholder="Email Address"
                  value={inputs.email}
                  onChange={onChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="number"
                  name="phoneNumber"
                  size="lg"
                  placeholder="Phone Number..."
                  value={inputs.phoneNumber}
                  onChange={onChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="password"
                  name="password"
                  size="lg"
                  placeholder="Enter Password..."
                  value={inputs.password}
                  onChange={onChangeInput}
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Control
                  className="form-boxes"
                  type="password"
                  name="confirmPassword"
                  size="lg"
                  placeholder="Confirm Password..."
                  value={inputs.confirmPassword}
                  onChange={onChangeInput}
                />
              </Form.Group>

              <div style={{position: "absolute", top: "0", right: "35%"}}>
                <Toast show={showErrorToast} onClose={closeToast}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded mr-2"
                      alt=""
                    />
                    <strong className="mr-auto">Error Message</strong>
                    <small>Just Now</small>
                  </Toast.Header>
                  <Toast.Body>
                    {showErrorMessage}
                  </Toast.Body>
                </Toast>
              </div>

              <Button
                className="form-button"
                variant="primary"
                type="submit"
                onClick={onSubmit}
              >
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
