import React from 'react';
import logoSrc from 'assets/img/logo.svg';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'assets/sass/Navbar.scss';

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className="m-auto">
          <Link to="/" className="navbar-brand">
            <img src={logoSrc} alt="" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
