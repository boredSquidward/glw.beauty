import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { useState } from "react";

import { classNameHandler } from "../../logic/navbarItemClassNameHandler";
import { appRoutes } from "../../core/constants/routes";
import Logo from "../../assets/images/logo.png";
import MyPopover from "./MyPopover";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const clickHandler = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="fixed z-50 bg-black top-0 w-screen border-b border-gray-900">
      <div className="mx-auto w-screen sm:px-15 py-2 sm:px-10 lg:px-8">
        <div className="relative p-4 flex h-20 items-center justify-between">
          <button
            className="flex flex-shrink-0 items-center"
            onClick={() => {
              navigate(appRoutes.homePath);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // for a smooth scrolling
              });
            }}
          >
            <img className="xl:h-20 h-12 w-auto" alt="glw.beauty" src={Logo} />
          </button>
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
              <button
                onClick={() => {
                  navigate(appRoutes.homePath);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // for a smooth scrolling
                  });
                }}
                className={classNameHandler(appRoutes.homePath, location)}
              >
                HOME
              </button>
              <MyPopover />
              <button
                onClick={() => {
                  navigate(appRoutes.aboutUsPath);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth", // for a smooth scrolling
                  });
                }}
                className={classNameHandler(appRoutes.aboutUsPath, location)}
              >
                ABOUT US
              </button>
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
          <button
            onClick={() => {
              navigate(appRoutes.homePath);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // for a smooth scrolling
              });
            }}
            className={classNameHandler(appRoutes.homePath, location)}
          >
            HOME
          </button>
          <MyPopover />
          <button
            onClick={() => {
              navigate(appRoutes.aboutUsPath);
              window.scrollTo({
                top: 0,
                behavior: "smooth", // for a smooth scrolling
              });
            }}
            className={classNameHandler(appRoutes.aboutUsPath, location)}
          >
            ABOUT US
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
