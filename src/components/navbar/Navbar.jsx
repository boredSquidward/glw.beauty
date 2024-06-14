import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../../assets/images/logo.png";
import { appRoutes } from "../../core/constants/routes";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MyPopover from "./Popover";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const classNameHandler = (path) => {
    if (location.pathname === path) {
      return windowWidth >= 640
        ? "2xl:px-6 px-3 2xl:py-4 py-2 bg-gray-900 text-white 2xl:text-3xl text-sm font-medium rounded-md"
        : "px-3 py-2 bg-gray-900 text-white block text-base font-medium rounded-md";
    } else {
      return windowWidth >= 640
        ? "2xl:px-6 px-3 2xl:py-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white 2xl:text-3xl text-sm font-medium rounded-md"
        : "px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white block text-base font-medium rounded-md";
    }
  };

  const clickHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
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
    <nav className="bg-black top-0 w-screen border-b border-gray-900">
      <div className="mx-auto w-screen sm:px-15 py-2 sm:px-10 lg:px-8">
        <div className="relative p-4 flex 2xl:h-36 h-20 items-center justify-between">
          <Link
            className="flex flex-shrink-0 items-center"
            to={appRoutes.homePath}
          >
            <img className="2xl:h-28 h-12 w-auto" alt="glw.beauty" src={Logo} />
          </Link>
          <div className="sm:hidden">
            <Disclosure>
              <Disclosure.Button
                onClick={clickHandler}
                className="p-2 mb-2 relative inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="absolute -inset-0.5" />
                {isDropdownOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </Disclosure>
          </div>
          <div className="hidden sm:ml-6 sm:flex items-center">
            <div className="flex space-x-4 items-center">
              <Link
                to={appRoutes.homePath}
                className={classNameHandler(appRoutes.homePath)}
              >
                HOME
              </Link>
              <MyPopover />
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
      <div className={`sm:hidden`} id="mobile-menu">
        <div
          className={`${
            isDropdownOpen ? "" : "hidden"
          } space-y-1 px-2 pb-3 pt-2`}
        >
          <Link
            to={appRoutes.homePath}
            className={classNameHandler(appRoutes.homePath)}
            aria-current="page"
          >
            HOME
          </Link>
          <MyPopover />
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
