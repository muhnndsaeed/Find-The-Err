import React from "react";
import { Link } from "react-router-dom";
import {Navbar,Nav,Container} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link><Link to="/Cards">Cards</Link></Nav.Link>
      <Nav.Link><Link to= "/About">About</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
      
    </div>
  );
}

export default Header;
