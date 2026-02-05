// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  background: #0f172a;
  color: #fff;
  text-align: center;
  padding: 1rem;
  margin-top: 2rem;
`;

const Footer = () => (
  <Foot>
    &copy; {new Date().getFullYear()} MyBusiness. All rights reserved.
  </Foot>
);

export default Footer;
