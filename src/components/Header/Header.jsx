import { Link, useLocation } from "react-router-dom";

import { HeaderWrap, StyledLink, LogoWrap, Logo } from "./Header.styled";

import logoGoIt from "../../img/goit.png";

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrap>
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
    </HeaderWrap>
  );
};