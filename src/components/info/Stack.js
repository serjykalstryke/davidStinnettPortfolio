import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Stack = () => {
  return (
    <Container className="stackBlock hideMobile">
      <Row>
        <Col className="stackCol text">
          <h1 className="otherText">Languages & Frameworks</h1>
        </Col>
        <Col className="stackCol text">
          <h1 className="otherText">
            Tools & <br />
            Libraries
          </h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="stackCol text">
          <ul className="stackUl">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
        </Col>
        <Col className="stackCol text">
          <ul className="stackUl">
            <li>Git & GitHub</li>
            <li>Bootstrap/Material-UI</li>
            <li>jQuery/AJAX</li>
            <li>Progressive Web Apps</li>
            <li>Node.js/Express</li>
            <li>MySQL/MongoDB</li>
            <li>Sequelize/Mongoose</li>
            <li>Jest/Mocha</li>
            <li>Postman</li>
            <li>Heroku/Netlify/Digital Ocean</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Stack;
