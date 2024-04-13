import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import { appRoutes } from "../../core/constants/routes";
import styles from "./navbar.module.css";

const Navbar = () => (
  <nav className={`${styles.nav} bg-gray-800`}>
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
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Link className="flex flex-shrink-0 items-center" to={appRoutes[0]}>
            <img className="h-16 w-auto" src={Logo} alt="Your Company" />
          </Link>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              <Link
                to={appRoutes.homePath}
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                HOME
              </Link>
              <Link
                to={appRoutes.servicesPath}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
              >
                SERVICES
              </Link>
              <Link
                to={appRoutes.contactUsPath}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                CONTACT US
              </Link>
              <Link
                to={appRoutes.aboutUsPath}
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
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
          className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
        >
          HOME
        </Link>
        <Link
          to={appRoutes.servicesPath}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          SERVICES
        </Link>
        <Link
          to={appRoutes.contactUsPath}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          CONTACT US
        </Link>
        <Link
          to={appRoutes.aboutUsPath}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          ABOUT US
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
