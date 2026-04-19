import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <span className="purple">web developer</span> specializing
              in <span className="purple">responsive design</span> and{" "}
              <span className="purple">AI-powered applications</span>.
              <br />
              <br />
              My skills include
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, Bootstrap, JavaScript, Python, Flask, and MongoDB.{" "}
                </b>
              </i>
              <br />
              <br />
              I have built projects such as an
              <i>
                <b className="purple"> AI-driven skin detection system </b>
              </i>
              using <b className="purple">TensorFlow</b> and{" "}
              <b className="purple">OpenCV</b>.
              <br />
              <br />
              I focus on creating <b className="purple">scalable</b>,{" "}
              <b className="purple">efficient</b>, and{" "}
              <b className="purple">user-friendly</b> web solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
