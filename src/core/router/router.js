import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { appRoutes } from "../constants/routes.js";

const Home = lazy(() => import("../../components/pages/home/Home.jsx"));
const AboutUs = lazy(() => import("../../components/pages/about-us/AboutUs.jsx"));
const NotFound = lazy(() => import("../../components/notFound/NotFound.jsx"));

const LaserHairRemoval = lazy(() => import("../../components/pages/services/LaserHairRemoval.jsx"));
const Facial = lazy(() => import("../../components/pages/services/Facial.jsx"));
const Derma = lazy(() => import("../../components/pages/services/Derma.jsx"));

const routes = [
  {
    path: appRoutes.homePath,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes.aboutUsPath,
    element: <AboutUs />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes["derma-frac"],
    element: <Derma />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes["hydra-facial"],
    element: <Facial />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes["laser-hair-removal"],
    element: <LaserHairRemoval />,
    errorElement: <NotFound />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: appRoutes.homePath,
});
