import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    // Updated to use local backend for MongoDB storage
    // Once deployed, change this URL to your hosted backend URL
    const backendUrl = "http://localhost:5000/api/contact";
    
    try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("Message stored in MongoDB successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please ensure the backend is running.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error connecting to backend. Make sure your server is started.");
    }
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: "1" }}>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Contact <strong className="purple">Me</strong>
            </h1>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black", border: "1px solid #c770f0" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black", border: "1px solid #c770f0" }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black", border: "1px solid #c770f0" }}
                />
              </Form.Group>
              <Button 
                variant="primary" 
                type="submit"
                style={{ backgroundColor: "#623686", border: "none", padding: "10px 30px" }}
              >
                Send Message
              </Button>
              {status && (
                <p style={{ marginTop: "15px", color: status.includes("success") ? "#c770f0" : "red" }}>
                  {status}
                </p>
              )}
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tushar-1-2-3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tushar-bhavik-3452973b1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
