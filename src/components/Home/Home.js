import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import Type from "./Type";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  // Liquid motion variants for background
  const liquidVariants = {
    animate: {
      borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
      scale: [1, 1.1, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Particle system
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2
  }));

  // Letter animation for name
  const name = "TUSHAR BHAVIK";
  const letters = name.split("");

  return (
    <section style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      {/* Ambient Background Motion - Liquid blue gradients */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <motion.div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-10%",
            width: "50%",
            height: "50%",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(37, 99, 235, 0.3) 50%, rgba(29, 78, 216, 0.4) 100%)",
            filter: "blur(80px)"
          }}
          variants={liquidVariants}
          animate="animate"
        />
        <motion.div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-10%",
            width: "60%",
            height: "60%",
            background: "linear-gradient(225deg, rgba(96, 165, 250, 0.4) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(30, 64, 175, 0.4) 100%)",
            filter: "blur(100px)"
          }}
          variants={liquidVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            width: "40%",
            height: "40%",
            background: "radial-gradient(circle, rgba(147, 197, 253, 0.3) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: "rgba(96, 165, 250, 0.7)",
            borderRadius: "50%",
            filter: "blur(1px)",
            zIndex: 0
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 50, -50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}

      {/* Animated SVG lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.1 }}>
        <motion.line
          x1="0" y1="20%" x2="100%" y2="20%"
          stroke="#3b82f6" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
        />
        <motion.line
          x1="0" y1="80%" x2="100%" y2="80%"
          stroke="#3b82f6" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
        <motion.line
          x1="20%" y1="0" x2="20%" y2="100%"
          stroke="#2563eb" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
        />
        <motion.line
          x1="80%" y1="0" x2="80%" y2="100%"
          stroke="#2563eb" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
        />
      </svg>

      <Container fluid className="home-section" id="home" style={{ position: "relative", zIndex: 1 }}>
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              {/* Expressive Typography - Glitch effect on hover */}
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

              {/* Animated name with staggered letter animation */}
              <motion.h1
                className="heading-name"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'M{" "}
                <div style={{ display: "inline-block", overflow: "hidden" }}>
                  {letters.map((letter, index) => (
                    <motion.span
                      key={index}
                      style={{
                        display: "inline-block",
                        fontWeight: "bold",
                        color: letter === " " ? "inherit" : "#3b82f6"
                      }}
                      initial={{ y: 50, opacity: 0, rotate: 10 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.05,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        color: "#60a5fa",
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.8)"
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.h1>

              <motion.div
                style={{ padding: 50, textAlign: "left" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Type />
              </motion.div>

              {/* CTA Buttons with morphing hover effects */}
              <motion.div
                style={{ marginTop: "30px", display: "flex", gap: "20px", flexWrap: "wrap" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.a
                  href="#contact"
                  style={{
                    padding: "14px 35px",
                    background: "linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa)",
                    backgroundSize: "200% 200%",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden"
                  }}
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
                    borderRadius: "40px"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  style={{
                    padding: "14px 35px",
                    background: "transparent",
                    color: "#3b82f6",
                    textDecoration: "none",
                    borderRadius: "30px",
                    fontWeight: "bold",
                    border: "2px solid #3b82f6",
                    cursor: "pointer",
                    position: "relative"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    borderColor: "#60a5fa",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.a>
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, position: "relative" }}>
              {/* Decorative rings around image */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "400px",
                  height: "400px",
                  border: "2px solid rgba(59, 130, 246, 0.3)",
                  borderRadius: "50%",
                  zIndex: 0
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "350px",
                  height: "350px",
                  border: "1px solid rgba(96, 165, 250, 0.2)",
                  borderRadius: "50%",
                  zIndex: 0
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <motion.img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))",
                    cursor: "grab"
                  }}
                  drag
                  dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
                  whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                />
              </motion.div>
              {/* Floating decorative elements */}
              <motion.div
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "10%",
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                  borderRadius: "12px",
                  zIndex: 0,
                  opacity: 0.8
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 45, 0],
                  scale: [1, 1.1, 1]
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
                  bottom: "15%",
                  left: "5%",
                  width: "30px",
                  height: "30px",
                  background: "linear-gradient(135deg, #60a5fa, #93c5fd)",
                  borderRadius: "50%",
                  zIndex: 0,
                  opacity: 0.7
                }}
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  scale: [1, 0.9, 1]
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
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
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
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: -360,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
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
