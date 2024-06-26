import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { appRoutes } from "../constants/routes.js";
import { Derma } from "../../components/pages/services/Derma.jsx";
import { Facial } from "../../components/pages/services/Facial.jsx";
import { LaserHairRemoval } from "../../components/pages/services/LaserHairRemoval.jsx";

const Home = lazy(() => import("../../components/pages/home/Home.jsx"));
// const Services = lazy(() =>
//   import("../../components/pages/services/Services.jsx")
// );
const AboutUs = lazy(() =>
  import("../../components/pages/about-us/AboutUs.jsx")
);
const NotFound = lazy(() => import("../../components/notFound/NotFound.jsx"));
// const ContactUs = lazy(() =>
//   import("../../components/pages/contact-us/ContactUs.jsx")
// );

const routes = [
  {
    path: appRoutes.homePath,
    element: <Home />,
    errorElement: <NotFound />,
  },
  // {
  //   path: appRoutes.servicesPath,
  //   element: <Services />,
  //   errorElement: <NotFound />,
  // },
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
  // {
  //   path: appRoutes.contactUsPath,
  //   element: <ContactUs />,
  //   errorElement: <NotFound />,
  // },
];

export const router = createBrowserRouter(routes, {
  basename: appRoutes.homePath,
});
