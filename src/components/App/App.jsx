import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routes";

const Home = lazy(() => import("../../pages/Home/Home"));
const Cards = lazy(() => import("../../pages/Cards/Cards"));
const NotFound = lazy(() => import("../../pages/NotFound"));

// import { Home } from "../../pages/Home/Home";
// import { Cards } from "../../pages/Cards/Cards";
// import { NotFound } from "../../pages/NotFound";

import logoGoIt from "../../img/goit.png";
import { Header, StyledLink, LogoWrap, Logo } from "./App.styled";

export const App = () => {
  return (
    <main>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={routes.HOME} index element={<Home />} />
          <Route path={routes.CARDS} element={<Cards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
};
