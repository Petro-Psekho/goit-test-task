import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";

import logoGoIt from "../../img/goit.png";
import { Container, Header, StyledLink, LogoWrap, Logo } from "./Layout.styled";

export const Layout = () => {
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
          <StyledLink to="/cards">Cards</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
