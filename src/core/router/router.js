import { createHashRouter } from "react-router-dom";
import { lazy } from "react";
import { appRoutes } from "../constants/routes.js";

const Home = lazy(() => import("../../components/pages/home/Home.jsx"));
const Services = lazy(() =>
  import("../../components/pages/services/Services.jsx")
);
const AboutUs = lazy(() =>
  import("../../components/pages/about-us/AboutUs.jsx")
);
const NotFound = lazy(() => import("../../components/notFound/NotFound.jsx"));
const ContactUs = lazy(() =>
  import("../../components/pages/contact-us/ContactUs.jsx")
);

const routes = [
  {
    path: appRoutes.homePath,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes.servicesPath,
    element: <Services />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes.aboutUsPath,
    element: <AboutUs />,
    errorElement: <NotFound />,
  },
  {
    path: appRoutes.contactUsPath,
    element: <ContactUs />,
    errorElement: <NotFound />,
  },
];

export const router = createHashRouter(routes, {
  basename: appRoutes.homePath,
});
