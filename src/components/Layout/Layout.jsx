import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import logoGoIt from "../../img/goit.png";
import { Header, StyledLink, LogoWrap, Logo } from "./Layout.styled";

export const Layout = () => {
  return (
    <main>
      <Header>
        <LogoWrap>
          <Logo src={logoGoIt} alt="GOIT Logo" />
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
    </main>
  );
};
