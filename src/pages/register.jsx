import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
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

  const onSubmit = async e => {
    e.preventDefault();
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
      return;
    }
    console.log(registerData);
    registerUser(registerData, dispatchRef);
  };

  return (
    <div className="registration-login-page-container">
      <Row>
        <Col
          sm="5"
          style={{
            height: "90vh",
            borderTopRightRadius: "45%",
            overflow: "hidden"
          }}
        >
          <img
            width="100%"
            height="100%"
            src="https://i.pinimg.com/originals/73/05/8e/73058eb5462639f1ef7e7a4795835a2b.jpg"
          />
        </Col>
        <Col>
          <div className="form-box shadow">
            <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
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
              <Button className="form-button" variant="primary" type="submit" onClick={onSubmit}>
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
