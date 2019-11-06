import React, { Component } from "react";
import "./css/landing.css";
import { Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page-top-container">
          <Row>
            <Col sm="7">
              <div className="landing-page-top-box-text">
                <p>Save Your Receipts </p>
                <p>On The Cloud With Ease.</p>
                <div className="landing-page-top-box-button-container">
                  <Link to="/register">
                    <Button>Register</Button>
                  </Link>
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  src="https://res.cloudinary.com/dcft8yhab/image/upload/v1572916920/undraw_notes1_cf55.svg"
                  alt=" an illustration showing a girl and some documents"
                  width="100%"
                  id="landing-page-top-box-img"
                />
              </div>
            </Col>
          </Row>
        </div>
        <div className="landing-page-main-body">
          <Container>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <div className="landing-page-how-to-use-box">
              <h2>Retrieve Receipts Seamlessly</h2>
              <div
                className="shadow"
                style={{
                  width: "70%",
                  margin: "0 auto",
                  backgroundColor: "grey",
                  padding: "3%"
                }}
              >
                <p>
                  Super easy steps to use this platform!
                </p>
                <Card className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col sm="3">
                      <img
                        src="https://res.cloudinary.com/dcft8yhab/image/upload/v1572645103/e7vrdrqpwlivpwpcfmwd.jpg"
                        width="100%"
                        height="75%"
                        alt=""
                      />
                    </Col>
                    <Col style={{ marginTop: "2%" }}>
                      <h4>Create An Account</h4>
                      <p>
                        Creating an account is so easy. We know you don't like a
                        registration form that's so long and seems like there'll
                        never be an end, so we kept it short and simple, while
                        requiring only information we need to get you started.
                      </p>
                    </Col>
                  </Row>
                </Card>
                <Card className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col style={{ marginTop: "2%" }}>
                      <h4>Upload receipt collections</h4>
                      <p>
                        Upon successful registration, you'll be amazed how easy
                        it is to add receipts collections. Receipt collections
                        enable you to add multiple related receipts at once, to
                        one collection.
                      </p>
                    </Col>
                    <Col sm="3">
                      <img
                        src="https://res.cloudinary.com/dcft8yhab/image/upload/v1572645103/e7vrdrqpwlivpwpcfmwd.jpg"
                        width="100%"
                        height="75%"
                        alt=""
                      />
                    </Col>
                  </Row>
                </Card>
                <Card className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col sm="3">
                      <img
                        src="https://res.cloudinary.com/dcft8yhab/image/upload/v1572645103/e7vrdrqpwlivpwpcfmwd.jpg"
                        width="100%"
                        height="75%"
                        alt=""
                      />
                    </Col>
                    <Col style={{ marginTop: "2%" }}>
                      <h4>Live Digitally</h4>
                      <p>
                        Oops... Do you really need all those piece of papers in
                        your bag? Embrace the digital culture, and have all your
                        receipts safely kept together in one place which can be
                        accessed from anywhere in the world!
                      </p>
                    </Col>
                  </Row>
                </Card>
                <Link to="/register">
                  <Button className="shadow-sm" style={{ padding: "2%" }}>
                    Get Started for Free
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
        <footer className="landing-page-footer"></footer>
      </>
    );
  }
}