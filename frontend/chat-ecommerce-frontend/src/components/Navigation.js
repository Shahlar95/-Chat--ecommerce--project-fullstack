import React from 'react';
import {Navbar, Button, Nav,NavDropdown, Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';


const Navigation = () => {
  const user = useSelector((state) =>state.user)

  return (

    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand href="#home">Ecomern</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* if no user */}
            {!user && (
              <LinkContainer to="login">
              <Nav.Link >Login</Nav.Link> 
              </LinkContainer>
            )}
            {/* if user */}
            {user && (
              <NavDropdown title={`${user.email}`} id="basic-nav-dropdown">
                {user.isAdmin && (
                  <>
                  <LinkContainer to="/dashboard">
                  <NavDropdown.Item >Dashboard</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/new-product">
                  <NavDropdown.Item >Create Product</NavDropdown.Item>
                  </LinkContainer>
                  </>
                )}
              {user.isAdmin && (
                <>
                <LinkContainer to="/cart">
                <NavDropdown.Item >Cart</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/orders">
                <NavDropdown.Item >My orders</NavDropdown.Item>
                </LinkContainer>
                </>
              )}
              <NavDropdown.Divider />
              <Button>Logout</Button>
            </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default Navigation