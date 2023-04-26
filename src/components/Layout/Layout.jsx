import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { ScrollToUp } from '../ScrollToTop/ScrollToTop';

import { Container } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ScrollToUp />
      <Footer />
    </Container>
  );
};
