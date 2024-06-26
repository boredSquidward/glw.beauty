import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";

import { classNameHandler } from "../../logic/navbarItemClassNameHandler";
import { appRoutes } from "../../core/constants/routes";

function MyPopover() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center text-center gap-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none space-y-1 px-3 py-2 w-full">
            SERVICES
            <ChevronDownIcon className={clsx("size-5", open && "rotate-180")} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom end"
            className="sm:mt-3 text-end w-56 z-50 flex flex-col text-white bg-black rounded-b-xl"
          >
            <button
              className={`${classNameHandler(
                appRoutes["laser-hair-removal"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              onClick={() => {
                navigate(appRoutes["laser-hair-removal"]);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for a smooth scrolling
                });
              }}
            >
              Laser Hair Removal
            </button>
            <button
              className={`${classNameHandler(
                appRoutes["derma-frac"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              onClick={() => {
                navigate(appRoutes["derma-frac"]);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for a smooth scrolling
                });
              }}
            >
              Derma-frac
            </button>
            <button
              className={`${classNameHandler(
                appRoutes["hydra-facial"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              onClick={() => {
                navigate(appRoutes["hydra-facial"]);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // for a smooth scrolling
                });
              }}
            >
              Hydrafacial
            </button>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default MyPopover;
