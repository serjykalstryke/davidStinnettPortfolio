import React from "react";
import { Container, Row } from "react-bootstrap"
import Me from "../../images/me.jpg"
import ScrollAnimation from 'react-animate-on-scroll';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas)

const Landing = () => {
    return (
      <Container className='landingBlock text'>
        
        <br /> <br />
        <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          delay={1000}
          animateOnce={true}
        >
          <h1 className="otherText">David Noton Stinnett</h1>
          <h2 className='landingMargin otherText'>
          
            Husband, Father, Full Stack Web Developer <br />
          </h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          delay={1700}
          animateOnce={true}

        >
          <h3 className="otherText">
            Get to know me below.&nbsp;
            <i className={`far fa-hand-point-down arrowBounce`}></i>
            <br />
            Check out my work and get in touch above.&nbsp;
            <i className={`far fa-hand-point-up arrowBounce`}></i>
          </h3>
        </ScrollAnimation>
      </Container>
    );
  };

    export default Landing