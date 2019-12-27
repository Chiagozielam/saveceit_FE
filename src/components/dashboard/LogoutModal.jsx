import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Redirect, withRouter } from "react-router-dom";
import {logoutUser} from "../../actions/userActions"
import {useDispatch} from "react-redux"

function LogoutModal(props) {
  const dispatchRef = useDispatch()
  const logout = async () => {
    const token = await localStorage.removeItem("user-token");
    props.history.push("/");
    logoutUser(dispatchRef)
  };
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        After logout, you will be redirected to the homepage. Do you wish to
        proceed?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={logout}>
          Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default withRouter(LogoutModal);
