import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import review from "../../Assets/Projects/review-leaf.png";
import game from "../../Assets/Projects/game.png";
import ecommerce from "../../Assets/Projects/ec-blog.png";
import maths from "../../Assets/Projects/maths.png";
import players from "../../Assets/Projects/players.png";
import food from "../../Assets/Projects/food.png";

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
              imgPath={game}
              isBlog={false}
              title="game"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/nandhakumar888/tic-tac-game-react"
              demoLink="https://nandhakumar888.github.io/tic-tac-game-react/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="food"
              description="Food is the basic human need to stay alive. Moreover, it is the need of every living organism. Therefore it is important that we should not waste food. Our world consists of different types of cultures. These cultures have varieties of dishes of food in them."
              ghLink="https://github.com/nandhakumar888/react-food-app"
              demoLink="https://gleaming-brioche-30c62a.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description=" Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website, an established selling website like Amazon, or social media to drive online sales."
              ghLink="https://github.com/nandhakumar888/e-commerce"
              demoLink="https://magenta-buttercream-060f60.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={review}
              isBlog={false}
              title="review"
              description="At People Data Labs we are building the largest and most accurate source of truth of people data. We provide a dataset of resume, contact, social, and demographic information for over 1.5 Billion unique individuals, delivered to you at the scale you need it. Sign Up for a Free API Key and start enriching profiles for free, no credit card required."
              ghLink="https://github.com/nandhakumar888/react-review"
              demoLink="https://nandhakumar888.github.io/react-review/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={players}
              isBlog={false}
              title="cricket players"
              description="Cricket is a sport that requires the use of a bat and ball. It is easily one of the most prevalent sports in the world. This game consists of two teams that include 11 players each. The main aim of the game is to score the highest number of runs. It is played on a pitch in a field that is well-maintained for the same purpose. Cricket is particularly famous in England and India. There is a lot of potential in Cricket which allows players to earn well. Cricket does not have one single format but various ones. Similarly, each format has a different set of rules and duration."
              ghLink="https://github.com/nandhakumar888/react-palyer-website"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maths}
              isBlog={false}
              title="calculater"
              description="Calculators are crucial because they enable students to cover the syllabus in time. This is because with the use of calculators it becomes fast to solve mathematics problem in less time and by use of little energy. Students are enabled to solve problems within given time. Students are able to practice a lot making them perfect problem solving."
              ghLink="https://github.com/nandhakumar888/react-calculater"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
