import React from 'react';
import { Link } from 'react-router';

import {Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Home</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <LinkContainer to={{ pathname: '/stacker' }}>
          <NavItem>Lyftari</NavItem>
        </LinkContainer>

        <LinkContainer to={{ pathname: '/sisu' }}>
          <NavItem>Sisu</NavItem>
        </LinkContainer>
        </Nav>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;