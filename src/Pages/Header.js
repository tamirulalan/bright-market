import React from 'react'
//import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Bright Market</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
          
    </header>
  )
}

export default Header
