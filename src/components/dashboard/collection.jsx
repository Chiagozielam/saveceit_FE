import React, { useState } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  Row,
  Col,
  Dropdown,
  Modal
} from "react-bootstrap";
import CollectionModal from "./collectionModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import axios from "axios";

const CollectionCard = props => {
  const [show, setShow] = useState(false);

  const handleCloseDeleteModal = () => setShow(false);
  const handleShowDeleteModal = () => {
    setShow(true);
  }

  let userToken = localStorage.getItem("user-token");
  userToken = JSON.parse(userToken);

  const handleDelete = e => {

    const collectionId = props.id;
    console.log(collectionId);

    const url = "//localhost:5000/api/v1/users/deletereceipt";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "user-token": userToken
      },
      data: { id: collectionId },
      url
    };
    axios(options).then(res => {
      console.log(res.status);
      props.dashboardHistory.push("/login")
    });
  };

  const [modalShow, setModalShow] = useState(false);
  return (
    <Card className="collection-card " style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.cardImage}
        style={{ height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <ButtonToolbar>
          <Row>
            <Col sm="10">
              <Button
                style={{ width: "150px" }}
                variant="primary"
                onClick={() => setModalShow(true)}
              >
                View Collection
              </Button>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={handleShowDeleteModal}
                  >
                    Delete Collection
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Modal show={show} onHide={handleCloseDeleteModal}>
            <Modal.Header closeButton>
              <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This deletion would be permanent. Do you wish to proceed?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDeleteModal}>
                Cancel
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
          <CollectionModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            dialogClassName="modal-90w"
            allImages={props.allImages}
          />
        </ButtonToolbar>
      </Card.Body>
    </Card>
  );
};

export default CollectionCard;
