import React, { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Sidenav from "../components/dashboard/sidenav";
import DashboardLayout from "../layouts/DashboardLayout";
import CollectionCard from "../components/dashboard/collection";
import {Redirect} from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const userState = useSelector(state => state.user);


  if(!userState.token){
    return <Redirect to="/login"/>
 }
  return (
    <DashboardLayout>
      <div style={{}}>
        <Container>
          <Row>
            <Col sm={4}>
              <CollectionCard />
            </Col>
            <Col sm={4}>
              <CollectionCard />
            </Col>
            <Col sm={4}>
              <CollectionCard />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <CollectionCard />
            </Col>
            <Col sm={4}>
              <CollectionCard />
            </Col>
            <Col sm={4}>
              <CollectionCard />
            </Col>
          </Row>
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
