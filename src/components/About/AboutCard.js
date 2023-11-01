import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Anand </span>
            from <span className="purple"> Bhopal, India.</span>
            <br /> I am a BTech Graduate (2023 batch) and I did my engineering in Computer Science.
            <br />
            Additionally, I am currently looking for a suitable job role.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
          </ul>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
