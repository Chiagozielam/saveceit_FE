import React, {useState} from 'react'
import {Modal, Button, Row, Col} from "react-bootstrap"

const CollectionModal = (props) => {
    console.log(props)
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            { props.allImages.map( image => (
              <Col sm="4"><img style={{width: "100%"}} src={image} alt=""/></Col>
            ))}
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CollectionModal