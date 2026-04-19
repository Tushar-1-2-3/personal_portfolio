import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  // Floating animation variants
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glowing orb variants
  const glowVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Text reveal animation
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section style={{ position: "relative", overflow: "hidden" }}>
      {/* Background animated orbs */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "300px",
        height: "300px",
        background: "radial-gradient(circle, rgba(199, 112, 240, 0.3) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        zIndex: 0
      }}>
        <motion.div variants={glowVariants} animate="animate" style={{ width: "100%", height: "100%" }} />
      </div>

      <div style={{
        position: "absolute",
        bottom: "20%",
        right: "5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(98, 54, 134, 0.2) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(80px)",
        zIndex: 0
      }}>
        <motion.div variants={glowVariants} animate="animate" style={{ width: "100%", height: "100%" }} transition={{ delay: 1 }} />
      </div>

      <Container fluid className="home-section" id="home" style={{ position: "relative", zIndex: 1 }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.h1
                style={{ paddingBottom: 15 }}
                className="heading"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Hi There!{" "}
                <motion.span
                  className="wave"
                  role="img"
                  aria-labelledby="wave"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  👋🏻
                </motion.span>
              </motion.h1>

              <motion.h1
                className="heading-name"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  I'M
                </motion.span>
                {" "}
                <motion.strong
                  className="main-name"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.1, color: "#c770f0" }}
                  style={{ display: "inline-block", cursor: "default" }}
                >
                  TUSHAR BHAVIK
                </motion.strong>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Type />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a
                  href="#contact"
                  style={{
                    padding: "12px 30px",
                    background: "linear-gradient(135deg, #623686, #c770f0)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "25px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer"
                  }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(199, 112, 240, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  style={{
                    padding: "12px 30px",
                    background: "transparent",
                    color: "#c770f0",
                    textDecoration: "none",
                    borderRadius: "25px",
                    fontWeight: "bold",
                    border: "2px solid #c770f0",
                    cursor: "pointer"
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(199, 112, 240, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.div
                variants={floatVariants}
                animate="animate"
              >
                <motion.img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    filter: "drop-shadow(0 0 20px rgba(199, 112, 240, 0.6))"
                  }}
                />
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "10%",
                  width: "20px",
                  height: "20px",
                  background: "#c770f0",
                  borderRadius: "50%",
                  opacity: 0.6
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 20, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  right: "20%",
                  width: "15px",
                  height: "15px",
                  background: "#623686",
                  borderRadius: "50%",
                  opacity: 0.5
                }}
                animate={{
                  y: [0, -25, 0],
                  x: [0, -15, 0],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
            <Col md={12} className="home-about-social">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Find Me On
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Feel free to <span className="purple">connect </span>with me
              </motion.p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <motion.a
                    href="https://github.com/Tushar-1-2-3"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    whileHover={{ scale: 1.2, rotate: 5, boxShadow: "0 0 20px rgba(199, 112, 240, 0.6)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
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
                    whileHover={{ scale: 1.2, rotate: -5, boxShadow: "0 0 20px rgba(199, 112, 240, 0.6)" }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <FaLinkedinIn />
                  </motion.a>
                </li>
              </ul>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
}

export default Home;
