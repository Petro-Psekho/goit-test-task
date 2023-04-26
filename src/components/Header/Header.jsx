import { Link, useLocation } from "react-router-dom";

import {
  HeaderWrap,
  Wrap,
  HeaderContentWrap,
  NavWrap,
  StyledLink,
  LogoWrap,
  Logo,
} from "./Header.styled";

import logoGoIt from "../../img/goit.png";

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrap>
      <HeaderContentWrap>
        <Wrap>
          <LogoWrap>
            <Link to="/">
              <Logo src={logoGoIt} alt="GOIT Logo" />
            </Link>
            <p>Test Task</p>
          </LogoWrap>

          <NavWrap>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/cards" state={{ from: location }}>
              Cards
            </StyledLink>
          </NavWrap>
        </Wrap>
      </HeaderContentWrap>
    </HeaderWrap>
  );
};
