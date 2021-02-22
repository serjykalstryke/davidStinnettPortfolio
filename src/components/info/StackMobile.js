import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StackMobile = () => {
  return (
    <Container className='stackBlock mobile-dropdown-toggle'>
      <Row>
        <Col className="text">
          <h1>Languages & Frameworks</h1>
          <h3>Dream it</h3>
          <hr />
          <ul className='stackUl'>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SQL</li>
            <li>NoSQL</li>
          </ul>
          <hr />
        </Col>
        <Col className="text">
          <h1>Tools & Libraries</h1>
          <h3>Build it</h3>
          <hr />

          <ul className='stackUl text'>
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
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default StackMobile;