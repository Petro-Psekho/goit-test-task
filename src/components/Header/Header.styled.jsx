import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderWrap = styled.header`
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  padding: 8px 0;
  margin: 0 auto;

  background: #ffffff;
  box-shadow: 0px 18px 20px -15px rgba(0, 0, 0, 0.27);

  > nav {
    display: flex;
    margin-right: 30px;
    gap: 10px;
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 4px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: #ff6c00;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 30px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const Logo = styled.img`
  height: 38px;
`;
