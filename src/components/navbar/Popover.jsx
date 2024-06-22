import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { appRoutes } from "../../core/constants/routes";
import { classNameHandler } from "../../logic/navbarItemClassNameHandler";
import { HashLink } from "react-router-hash-link";

function MyPopover() {
  const location = useLocation();

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
            <Link
              className={`${classNameHandler(
                appRoutes["laser-hair-removal"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              to={`${appRoutes["laser-hair-removal"]}#top`}
            >
              Laser Hair Removal
            </Link>
            <HashLink
              className={`${classNameHandler(
                appRoutes["derma-frac"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              to={`${appRoutes["derma-frac"]}#top`}
            >
              Derma-frac
            </HashLink>
            <HashLink
              className={`${classNameHandler(
                appRoutes["hydra-facial"],
                location
              )} m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md`}
              to={`${appRoutes["hydra-facial"]}#top`}
            >
              Hydrafacial
            </HashLink>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default MyPopover;
