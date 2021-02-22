import React, { useState, Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import ContactInfo from './ContactInfo.js';
// import ContactForm from './ContactForm';
import Nav from 'react-bootstrap/Nav';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Nav.Link className='links text' onClick={handleShow}>
        Get in Touch!
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get in touch:</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ContactInfo />
          
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}

export default ContactModal;