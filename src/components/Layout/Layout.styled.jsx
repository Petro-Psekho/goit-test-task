import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.main`
  max-width: 1240px;
  margin: 0 auto;
`;

export const Header = styled.header`
  background: #ffffff;
  z-index: 9999;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  /* border-bottom: 1px solid black; */
  box-shadow: 0px 18px 20px -15px rgba(0, 0, 0, 0.27);

  > nav {
    display: flex;
    margin-right: 30px;
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
  margin: 0 0 0 20px;

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
