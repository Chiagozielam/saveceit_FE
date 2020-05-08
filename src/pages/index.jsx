import React, { Component } from "react";
import HorizontalScrollCards from "../components/horizontalScrollCards";
import "./css/landing.css";
import { Navbar, Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faCloudDownloadAlt,
  faGlobeAfrica,
} from "@fortawesome/free-solid-svg-icons";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="landing-page-top-container">
          <Row>
            <Col sm="7">
              <div className="landing-page-top-box-text">
                <div className="square-box"></div>
                <p>
                  <span>Save</span>
                  <br />
                  <span>Your Receipts On</span>
                  <br />
                  <span>The Cloud With Ease.</span>
                </p>
                <div className="landing-page-top-box-button-container">
                  <Link to="/register">
                    <Button className="landing-page-top-register-button">
                      Register
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button>Login</Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col>
              <div className="d-none d-md-block landing-page-top-box-img-box">
                <img
                  src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588860708/sprinter-colour.svg"
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
            <div className="landing-page-how-to-use-box">
              <h2>Retrieve Receipts Seamlessly</h2>
              <p className="landing-page-how-to-use-box-sub-header">
                Super easy steps to use this platform!
              </p>
              <div className=" d-none d-md-block how-to-use-main-container">
                <div className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col sm="5">
                      <div className="landing-page-how-to-use-box-inner-img">
                        <img
                          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588860076/day40-powerbook-100-5184a5aea51cdcd0aed26c9452ef17f9.svg"
                          responsive
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col>
                      <div className="create-an-account-explanation">
                        <h4>Create An Account</h4>
                        <p>
                          Creating an account is so easy. We know you don't like
                          a registration form that's so long and seems like
                          there'll never be an end, so we kept it short and
                          simple, while requiring only information we need to
                          get you started.
                        </p>
                        <Link to="/register">
                          <Button
                            className="shadow-sm"
                            style={{ padding: "2%" }}
                          >
                            Get Started for Free
                          </Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col>
                      <div className="upload-receipts-collection-explanation">
                        <h4>Upload receipt collections</h4>
                        <p>
                          Upon successful registration, you'll be amazed how
                          easy it is to add receipts collections. Receipt
                          collections enable you to add multiple related
                          receipts at once, to one collection.
                        </p>
                        <Link to="/register">
                          <Button
                            className="shadow-sm"
                            style={{ padding: "2%" }}
                          >
                            Get Started for Free
                          </Button>
                        </Link>
                      </div>
                    </Col>
                    <Col sm="5">
                      <div className="landing-page-how-to-use-box-inner-cards-img live-digitally-img-box">
                        <img
                          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588878526/christin-hume-Hcfwew744z4-unsplash.jpg"
                          responsive
                          alt=""
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="landing-page-how-to-use-box-inner-cards">
                  <Row>
                    <Col sm="5">
                      <div className="landing-page-how-to-use-box-inner-cards-img">
                        <img
                          src="https://res.cloudinary.com/dcft8yhab/image/upload/v1588860063/day27-my-robot-d0bbf5d487c827616127a0902ec5e388.svg"
                          responsive
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col style={{ marginTop: "2%" }}>
                      <div className="create-an-account-explanation">
                        <h4>Live Digitally</h4>
                        <p>
                          Oops... Do you really need all those piece of papers
                          in your bag? Embrace the digital culture, and have all
                          your receipts safely kept together in one place which
                          can be accessed from anywhere in the world!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Link to="/register">
                  <Button className="shadow-sm" style={{ padding: "2%" }}>
                    Get Started for Free
                  </Button>
                </Link>
              </div>

              {/* THIS WOULD ONLY BE DISPLAYED ON MOBILE */}
              <div
                className="d-md-none"
                style={{
                  width: "95%",
                  margin: "0 auto",
                  padding: "3%",
                }}
              >
                <HorizontalScrollCards />
              </div>
            </div>
          </Container>
        </div>
        <footer className="landing-page-footer"></footer>
      </>
    );
  }
}
