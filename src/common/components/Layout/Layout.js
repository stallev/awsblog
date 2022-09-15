import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, Footer } from '../../components/'

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;