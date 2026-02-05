// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0f172a;
  color: #fff;
`;

const NavLinks = styled.div`
  a {
    margin-left: 1.5rem;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #38bdf8;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>MyBusiness</h1>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
