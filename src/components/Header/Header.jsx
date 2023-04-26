import { Link, useLocation } from "react-router-dom";

import { Header, StyledLink, LogoWrap, Logo } from "./Header.styled";

import logoGoIt from "../../img/goit.png";

export const Headerr = () => {
  const location = useLocation();
  return (
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
  );
};
