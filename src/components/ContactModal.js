import React , { useState }  from 'react';
import {Modal , Button  , Row , Col } from 'react-bootstrap';
import Iframe from 'react-iframe'

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <Button variant="outline-danger" onClick={handleShow}>
        Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 style={{color :"#2f3542" , fontStyle: "italic"}}>Contact</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
            <Col>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13694.49746111733!2d75.8302206!3d30.8971676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9b60e4df73ee4b7!2sBakes%20And%20Beans!5e0!3m2!1sen!2sin!4v1596018266314!5m2!1sen!2sin"
        width="150px"
        height="150px"
        display="initial"/>
        </Col>
        <Col>
          <h6>655,</h6>
          <h6>Pakhowal Rd, </h6>
          <h6>Gurdev Nagar,</h6>
          <h6> Ludhiana,</h6>
          <h6> Punjab 141001,</h6>
          <h6> Contact: 01615017777 </h6>
        </Col>
      </Row>
      <Button variant="outline-primary" size="lg" block>
        <a href="tel:01615017777">Call </a>
      </Button>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ContactModal;
