import React, { useState, useEffect } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Sidenav from "../components/dashboard/sidenav";
import DashboardLayout from "../layouts/DashboardLayout";
import CollectionCard from "../components/dashboard/collection";
import { getUserProfile } from "../actions/userActions";
import { Redirect, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Dashboard = (props) => {
  const [allCollections, setAllCollections] = useState([]);
  const dispatchRef = useDispatch();
  useEffect(() => {
    getUserProfile(dispatchRef);
    const fetchCollections = async () => {
      const url = "//localhost:5000/api/v1/users/viewuserreceipts";
      let userToken = localStorage.getItem("user-token");
      userToken = JSON.parse(userToken);
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "user-token": userToken
        },
        url
      };
      let sendDataObject = await axios(options);
      sendDataObject = sendDataObject.data;
      setAllCollections(sendDataObject);
      console.log(allCollections);
    };
    fetchCollections()
  }, []);
  const userState = useSelector(state => state.user);

  if (!userState.token) {
    return <Redirect to="/login" />;
  }
  return (
    <DashboardLayout>
      <div style={{}}>
        <Container>
          <Row>
          {
            allCollections.map( collection => (
              <Col sm={4} key= {collection._id}>
                <CollectionCard cardImage = {collection.receiptImg[0]} allImages = {collection.receiptImg} cardTitle= {collection.receiptName} id= {collection._id} dashboardHistory={props.history}/>
              </Col>
            ))
          }
          </Row>
        </Container>
      </div>
    </DashboardLayout>
  );
};

export default withRouter(Dashboard);
