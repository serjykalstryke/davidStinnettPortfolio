import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Me from "../../images/me.jpg"

const Bio = () => {
  return (
    <Container className='bioBlock'>
      <Row>
        <article className='col-md-12'>
          <Image
            src={Me}
            alt='headshot'
            id="me"
            roundedCircle
          />
          <div>
            <h1 className="text">Let's Make Something Beautiful</h1>
            <p className="text">
              My name is David Stinnett, and I am a graduate of the University of Richmond Coding Bootcamp. When I am not busy with my responsibilities as a husband and father, I enjoy playing music and coding. My favorite thing in the world is diving into new Javascript frameworks.
            </p>
          </div>
          <i
            className='far fa-hand-point-down arrowScrollDown text'
            style={{ fontSize: '2rem' }}
          ></i>
        </article>
      </Row>
    </Container>
  );
};

export default Bio;