import styled from "@emotion/styled";

export const FooterWrap = styled.footer`
  position: fixed;
  z-index: 600;
  bottom: 0;
  padding: 10px;
  background-color: #fff;
  width: 100%;

  box-shadow: 0px 18px 20px 15px rgba(0, 0, 0, 0.27);
  border-top: 1px solid #8080802b;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 30px;
`;

export const FooterText = styled.p`
  padding: 10px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
`;

export const LinkTo = styled.a`
  display: flex;
`;
