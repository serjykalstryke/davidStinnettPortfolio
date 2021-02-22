import React, { useState } from 'react';

import ContactModal from '../contact/ContactModal';
import Hamburger from './Hamburger';

import resume from "../../resume/DavidStinnettResume.pdf"

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const NavBar = () => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const toggleMobileNav = () => setMobileNavOpened(!mobileNavOpened);

  //* Dismiss navbar on link click

  return (
    <Navbar className={mobileNavOpened ? 'nav dropdown-opened' : 'nav'}>
      <Navbar.Brand className='logo hideMobile' href='/'><p className="text links">David Stinnett</p>
      </Navbar.Brand>

      <Hamburger toggleMobileNav={toggleMobileNav} opened={mobileNavOpened} />

      <div className='dropdown-link-container text'>
        <div className='dropdown-links'>
          <LinkContainer to='/'>
            <Nav.Link className='links text' onClick={toggleMobileNav}>
              Home
            </Nav.Link>
          </LinkContainer>

          <LinkContainer to='/portfolio'>
            <Nav.Link className='links text' onClick={toggleMobileNav}>
              Portfolio
            </Nav.Link>
          </LinkContainer>

          <Nav.Link
            className='links text'
            href={resume}
            target='_blank'
            rel='noreferrer noopener'
            download
          >
            Resume
          </Nav.Link>
          <ContactModal />

          <Nav.Link
            href='https://github.com/serjykalstryke'
            target='_blank'
            className='links'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-github text links'></i>
            </span>
          </Nav.Link>

          <Nav.Link
            href='https://www.linkedin.com/in/david-stinnett-259262166/'
            target='_blank'
            className='links'
            rel='noreferrer noopener'
          >
            <span className='icon'>
              <i className='fab fa-linkedin text links'></i>
            </span>
          </Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default NavBar;