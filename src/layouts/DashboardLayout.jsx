import React, {useState} from 'react';
import {Navbar, Container, Row, Col} from 'react-bootstrap';
import Sidenav from "../components/dashboard/sidenav"

const DashboardLayout = (props) => {
  return(
    <div>
      <div style={{backgroundColor: "#F5F5F3"}}>
          <Row>
            <Col sm={2}>
              <Sidenav />
            </Col>
            <Col>
                {props.children}
            </Col>
          </Row>
      </div>
    </div>
  )
}

export default DashboardLayout