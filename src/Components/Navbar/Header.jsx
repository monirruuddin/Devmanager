import React from 'react'
import {Container,Button,Form,Nav,Navbar} from 'react-bootstrap';
import { BrowserRouter,Link,NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='CustomColor'>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className='colorCustom'>Dev Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',color:"#fff" }}
            navbarScroll>
            <Nav.Link as={NavLink} to='/contacts' className='colorCustom'>All Contact</Nav.Link>
            <Nav.Link as={NavLink} to='/add-contact' className='colorCustom'>Add Contact</Nav.Link>
            <Nav.Link as={NavLink} to='/register' className='colorCustom'>Register</Nav.Link>
            <Nav.Link as={NavLink} to='/login' className='colorCustom'>Log In</Nav.Link>
            {/* <Nav.Link as={NavLink} to='/Register' className='colorCustom'>Register</Nav.Link>
            <Nav.Link as={NavLink} to='/Login' className='colorCustom'>Log in</Nav.Link> */}
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;