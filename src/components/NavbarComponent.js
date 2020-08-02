import React from 'react';
import { Navbar,Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ContactModal from './ContactModal'

function NavbarComponent(props){


    return (
      <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
    <Navbar.Brand href="/"  style={{color : "#fff200"}}> Bakes&Beans </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/#section1" ><Button variant="outline-danger">About</Button></Nav.Link>

        <Nav.Link><ContactModal/></Nav.Link>

      </Nav>
      <Nav>
        <Nav.Link href="/menu" ><Button variant="outline-success">Menu</Button></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</React.Fragment>
    );
  }


export default NavbarComponent;
