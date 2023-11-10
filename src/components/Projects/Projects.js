import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import andern from "../../Assets/Projects/andern.live.png";
import medicinefinder from "../../Assets/Projects/MedicineFinder.png";
import divmedia from "../../Assets/Projects/Divmedia.in.png";
import gameNexus from "../../Assets/Projects/GameNexus.png";
import taskmanager from "../../Assets/Projects/TaskManager.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={andern}
              isBlog={false}
              title="andern.live"
              description="Esports tournaments statistics and points table website with minimalistic UI and smooth user experience. This website shows points and standings in realtime which no other website is doing right now."
              ghLink="https://github.com/himanshu1721/esportsx_user"
              demoLink="https://www.andern.live/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={divmedia}
              isBlog={false}
              title="divmedia.in"
              description="buy affordable assets for your products using this website and create a larger user base for your product. Media and assets can be used for marketing."
              ghLink=""
              demoLink="https://www.divmedia.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gameNexus}
              isBlog={false}
              title="GameNexus"
              description="A large game database with all the information about the game. It has over 800k games and games can be searched individually on search bar. The data is fetched from an api with fast response."
              ghLink="https://github.com/Dhruvanand24/game-nexus"
              demoLink="https://game-nexus-omega.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicinefinder}
              isBlog={false}
              title="Medicine Finder"
              description="A quick way to find medicine in your city. User will type any medicine name in the search bar and every medical shop in that city will get a notification for the requested medicine. If the shop has the medicine they can accept the req and a location and contact info will be sent to the user."
              ghLink="https://github.com/Dhruvanand24/Medicine-Searching-Platform"
              demoLink="https://dhruvanand24.github.io/Medicine-Searching-Platform/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskmanager}
              isBlog={false}
              title="Collaborative Task Manager"
              description="A collaborative task manager where user can assign tasks to other users. It has basic functionality of editing, deleting, complete task button, pending task button. Also users can add comments on individual tasks."
              ghLink="https://github.com/Dhruvanand24/taskmanager"
              demoLink="https://taskmanager-1xlb.vercel.app/login" 
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
