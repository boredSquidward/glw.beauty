import { createHashRouter } from "react-router-dom";
import { lazy } from "react";

// import { Home } from "../../components/pages/Home";
const Home = lazy(() => import("../../components/pages/Home.jsx"));
// const Login = lazy(() => import("../login/LoginPage"));
// const Menu = lazy(() => import("../menu/MenuPage"));
// const Products = lazy(() => import("../menu/Products"));
const NotFound = lazy(() => import("../../components/notFound/NotFound.jsx"));
// const Awards = lazy(() => import("../awards/Awards"));
// const About = lazy(() => import("../about/About"));

const homePath = "/";
// const loginApi = process.env.REACT_APP_ADMIN_API;
// const menuApi = process.env.REACT_APP_MENU_API;
// const productsApi = process.env.REACT_APP_PRODUCT_API;
// const awardsApi = process.env.REACT_APP_AWARDS_API;
// const aboutApi = process.env.REACT_APP_ABOUT_API;

const routes = [
  {
    path: homePath,
    element: <Home />,
    errorElement: <NotFound />,
  },
  // {
  //   path: loginApi,
  //   element: <Login />,
  // },
  // {
  //   path: awardsApi,
  //   element: <Awards />,
  // },
  // {
  //   path: aboutApi,
  //   element: <About />,
  // },
  // {
  //   path: menuApi,
  //   element: <Menu />,
  // },
  // {
  //   path: productsApi,
  //   element: <Products />,
  // },
];

export const router = createHashRouter(routes, {
  basename: homePath,
});
