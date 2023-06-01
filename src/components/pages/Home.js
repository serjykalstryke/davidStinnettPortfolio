import React, { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import Landing from "../info/Landing";
import Bio from "../info/Bio";
import Stack from "../info/Stack";
import StackMobile from "../info/StackMobile";

function Home() {
  return (
    <Fragment>
      <Container>
        <div class="top text-center" id="mainContentContainer">
          <Landing />
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          offset={500}
          initiallyVisible={false}
        >
          <Bio />
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          offset={400}
          initiallyVisible={false}
        >
          <Stack />
          <StackMobile />
        </ScrollAnimation>
      </Container>
    </Fragment>
  );
}

export default Home;
