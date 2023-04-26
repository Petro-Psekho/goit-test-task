import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Headerr } from "../Header/Header";

// import logoGoIt from "../../img/goit.png";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <Container>
      <Headerr />
      {/* <Header>
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
      </Header> */}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
