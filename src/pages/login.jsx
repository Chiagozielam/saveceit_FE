import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {loginUser} from "../actions/userActions"
import { useSelector } from "react-redux";


import "./css/forms.css";

const Login = (props) => {
  const dispatchRef = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });
  const onChangeInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs.name);
  };

  const formSubmit = e => {
    e.preventDefault()
    const {email, password} = inputs;
    const loginData = {
      email,
      password
    }
    loginUser(loginData, dispatchRef);
    props.history.push("/dashboard")
  };

  const userState = useSelector(state => state.user);

  if(userState.token){
    return <Redirect to="/dashboard"/>
 }
  return (
    <div>
      <div className="form-box shadow">
        <Form>
          <Form.Group controlId="">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
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
              placeholder="Password"
              value={inputs.password}
              onChange={onChangeInput}
            />
          </Form.Group>
          <Form.Group controlId="">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={formSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
