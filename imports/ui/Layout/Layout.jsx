import React from 'react';
import { Link } from 'react-router';

import { LinkContainer } from 'react-router-bootstrap';
import {Nav, Navbar, NavItem, NavDropdown} from 'react-bootstrap';

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