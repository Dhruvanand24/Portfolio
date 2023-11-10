import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiMongodb
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiExpress,

} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Tippy content={<span>C++</span>}> 
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      </Tippy>
      <Tippy content={<span>JavaScript</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      </Tippy>
      <Tippy content={<span>ReactJS</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      </Tippy>
      <Tippy content={<span>NodeJS</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      </Tippy>
      <Tippy content={<span>MongoDB</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      </Tippy>
      <Tippy content={<span>Git</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      </Tippy>
      <Tippy content={<span>Firebase</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      </Tippy>
      <Tippy content={<span>Python</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      </Tippy>
      <Tippy content={<span>MySql</span>}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      </Tippy>
    </Row>
  );
}

export default Techstack;
