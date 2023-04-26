import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { FooterWrap, Wrap, FooterText, LinkTo } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <Wrap>
        <LinkTo target="_blank" rel="noreferrer" href="https://github.com/Petro-Psekho">
          <FaGithub size="32" color="#373737" />
        </LinkTo>

        <FooterText> Developed by Petro Psekho </FooterText>
        <LinkTo target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/petro-psekho/">
          <FaLinkedin size="32" color="#373737" />
        </LinkTo>
      </Wrap>
    </FooterWrap>
  );
};
