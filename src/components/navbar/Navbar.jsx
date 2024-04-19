import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../../assets/images/logo.png";
import { appRoutes } from "../../core/constants/routes";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const classNameHandler = (path) => {
    if (location.pathname === path) {
      return windowWidth >= 640
        ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium font-sans"
        : "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium font-sans";
    } else {
      return windowWidth >= 640
        ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium font-sans"
        : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium font-sans";
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="bg-black sm:fixed w-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            ></button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <Link
              className="flex flex-shrink-0 items-center"
              to={appRoutes.homePath}
            >
              <img className="h-16 w-auto" src={Logo} alt="glw.beauty" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4">
                <Link
                  to={appRoutes.homePath}
                  className={classNameHandler(appRoutes.homePath)}
                >
                  HOME
                </Link>
                <Link
                  to={appRoutes.servicesPath}
                  className={classNameHandler(appRoutes.servicesPath)}
                >
                  SERVICES
                </Link>
                <Link
                  to={appRoutes.contactUsPath}
                  className={classNameHandler(appRoutes.contactUsPath)}
                >
                  CONTACT US
                </Link>
                <Link
                  to={appRoutes.aboutUsPath}
                  className={classNameHandler(appRoutes.aboutUsPath)}
                >
                  ABOUT US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            to={appRoutes.homePath}
            className={classNameHandler(appRoutes.homePath)}
            aria-current="page"
          >
            HOME
          </Link>
          <Link
            to={appRoutes.servicesPath}
            className={classNameHandler(appRoutes.servicesPath)}
          >
            SERVICES
          </Link>
          <Link
            to={appRoutes.contactUsPath}
            className={classNameHandler(appRoutes.contactUsPath)}
          >
            CONTACT US
          </Link>
          <Link
            to={appRoutes.aboutUsPath}
            className={classNameHandler(appRoutes.aboutUsPath)}
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
