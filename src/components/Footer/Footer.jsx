import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterWrap, Wrap, FooterText, LinkTo } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterWrap>
      <Wrap>
        <LinkTo
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Petro-Psekho"
        >
          <FaGithub size="26" color="#5a5959" />
        </LinkTo>
        <FooterText> Developed by Petro Psekho </FooterText>
        <LinkTo
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/petro-psekho/"
        >
          <FaLinkedin size="26" color="#5a5959" />
        </LinkTo>
      </Wrap>
    </FooterWrap>
  );
};
