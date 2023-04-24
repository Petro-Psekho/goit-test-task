import { Outlet, Link, useLocation } from 'react-router-dom';
import { Suspense } from 'react';

import logoGoIt from '../../img/goit.png';
import { Container, Header, StyledLink, LogoWrap, Logo } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();

  return (
    <Container>
      <Header>
        <LogoWrap>
          <Link to="/">
            <Logo src={logoGoIt} alt="GOIT Logo" />
          </Link>
          <p>Test Task</p>
        </LogoWrap>

        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/cards" state={{ from: location }}>
            Cards
          </StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
