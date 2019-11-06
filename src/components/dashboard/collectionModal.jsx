import React, {useState} from 'react'
import {Modal, Button, Row, Col} from "react-bootstrap"

function CollectionModal(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
          </Row>
          <Row>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
          </Row>
          <Row>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
              <Col><img style={{width: "100%"}} src="https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-04.jpg" alt=""/></Col>
          </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default CollectionModal