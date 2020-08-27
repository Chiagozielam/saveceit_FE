import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Form, Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useSelector } from "react-redux";

import "./css/forms.css";

const Login = (props) => {
  const dispatchRef = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const closeToast = () => {
    setShowErrorToast(false);
  };

  const [showErrorToast, setShowErrorToast] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    const loginData = {
      email,
      password,
    };
    if (!email) {
      setShowErrorMessage("A valid Email input is required!");
      setShowErrorToast(!showErrorToast);
      return;
    } else if (!password) {
      setShowErrorMessage("A valid Password input is required!");
      setShowErrorToast(!showErrorToast);
      return;
    }
    loginUser(loginData, dispatchRef);
    return <Redirect to="/dashboard" />;
  };

  const userState = useSelector((state) => state.user);

  if (userState.token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="registration-login-page-container">
      <div className="form-box shadow">
        <h1 style={{ textAlign: "center", fontWeight: "bold" }}>Sign In.</h1>
        <Form>
          <Form.Group controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="form-boxes"
              size="lg"
              placeholder="Enter email"
              value={inputs.email}
              onChange={onChangeInput}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              className="form-boxes"
              size="lg"
              placeholder="Password"
              value={inputs.password}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Check
              type="checkbox"
              label="I do nothing, but you could still check me if you wish!"
            />
          </Form.Group>

          <div style={{ position: "absolute", top: "0", right: "35%" }}>
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
              <Toast.Body>{showErrorMessage}</Toast.Body>
            </Toast>
          </div>

          <Button
            variant="primary"
            type="submit"
            className="form-button"
            onClick={formSubmit}
          >
            Sign In
          </Button>
        </Form>
        <p class="register-login-redirect">
          Don't have an account yet? <Link to="/register">Register.</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
