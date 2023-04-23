import { Routes, Route } from 'react-router-dom';

import { Home } from '../../pages/Home/Home';
import { Cards } from '../../pages/Cards/Cards';
import { NotFound } from '../../pages/NotFound';

import logoGoIt from '../../img/goit.png';
import { Header, StyledLink, LogoWrap, Logo } from './App.styled';

export const App = () => {
  return (
    <>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
