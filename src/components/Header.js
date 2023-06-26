import React from 'react';
import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Navbar className='navbar' collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="bottom">
      <Container>
        <Navbar.Brand className='title' href="/">TEJAS<span>AURA</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='sub' href="/">Home</Nav.Link>
            <Nav.Link className='sub' href="#about">About</Nav.Link>
            <Nav.Link className='sub' href="#projects">Projects</Nav.Link>
            <Nav.Link className='sub' href="#skills">Skills</Nav.Link>
            <Nav.Link className='sub connect' target="_blank" href="https://www.linkedin.com/in/teja-chavva/">Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;