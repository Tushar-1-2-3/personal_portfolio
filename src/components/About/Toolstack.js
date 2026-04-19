import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  AiOutlineCode,
  AiOutlineRobot,
} from "react-icons/ai";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineCode fontSize={"1.5em"} />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineRobot fontSize={"1.5em"} />
        <div className="tech-icons-text">Windsurf</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
