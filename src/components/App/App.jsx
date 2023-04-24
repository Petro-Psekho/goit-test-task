import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../routes";

import { Layout } from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home"));
const Cards = lazy(() => import("../../pages/Cards/Cards"));
const NotFound = lazy(() => import("../../pages/NotFound"));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.CARDS} element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
