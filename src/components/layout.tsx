import React from 'react';
import { Container } from 'react-bootstrap';
import LayoutNavbar from './layoutNavbar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <LayoutNavbar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
