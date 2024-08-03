import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Tippy content={<span>Visual Studio Code</span>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
      </Tippy>
      <Tippy content={<span>Slack</span>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiSlack />
        </Col>
      </Tippy>
      <Tippy content={<span>Vercel</span>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
      </Tippy>
      <Tippy content={<span>PostMan</span>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
      </Tippy>
      <Tippy content={<span>Figma</span>}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFigma />
        </Col>
      </Tippy>
    </Row>
  );
}

export default Toolstack;
