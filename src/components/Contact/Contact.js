import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
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
    
    // Production backend URL
    const backendUrl = "https://portfolio-backend-qcwj.onrender.com/api/contact";
    
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
            <motion.h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact <strong className="purple">Me</strong>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group className="mb-3" controlId="formName">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black", border: "1px solid #c770f0" }}
                    />
                  </motion.div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.9)", color: "black", border: "1px solid #c770f0" }}
                    />
                  </motion.div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
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
                  </motion.div>
                </Form.Group>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button 
                    variant="primary" 
                    type="submit"
                    style={{ backgroundColor: "#623686", border: "none", padding: "10px 30px" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Send Message
                  </Button>
                </motion.div>
                {status && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ marginTop: "15px", color: status.includes("success") ? "#c770f0" : "red" }}
                  >
                    {status}
                  </motion.p>
                )}
              </Form>
            </motion.div>
          </Col>
        </Row>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <motion.a
                    href="https://github.com/Tushar-1-2-3"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <AiFillGithub />
                  </motion.a>
                </li>
                <li className="social-icons">
                  <motion.a
                    href="https://www.linkedin.com/in/tushar-bhavik-3452973b1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedinIn />
                  </motion.a>
                </li>
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Contact;
