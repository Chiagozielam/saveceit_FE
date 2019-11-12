import React, { useState } from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Sidenav from "../components/dashboard/sidenav";
import "./layouts.css";
import DesktopSidenav from "../components/dashboard/DesktopSidenav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faWindowClose } from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = props => {
  const [nav, setNav] = useState(false);
  const toggleNavigation = () => {
    if (nav) {
      setNav(false);
    } else if(nav == false) {
      setNav(true);
    }
  };
  return (
    <div>
      <div style={{ backgroundColor: "#F5F5F3" }}>
        <div>
          {nav ? (
            <FontAwesomeIcon
            style={{ fontSize: "30px", margin: "2%", position: "absolute", zIndex:"10000" }}
            icon={faWindowClose}
            onClick={toggleNavigation}
          />
          ) : (
            <FontAwesomeIcon
              style={{ fontSize: "30px", margin: "2%" }}
              icon={faBars}
              className="hamburger-icon"
              onClick={toggleNavigation}
            />
          )}
        </div>

        <Row>
          {nav ? (
            <Col
              id="dashboard-layout-sidenav"
              style={{ zIndex: "1000" }}
              sm={2}
            >
              <Sidenav/>
            </Col>
          ) : (
            <Col
              id="dashboard-layout-sidenav"
              style={{ zIndex: "1000" }}
              sm={2}
            >
              <DesktopSidenav/>
            </Col>
          )}
          <Col>{props.children}</Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardLayout;
