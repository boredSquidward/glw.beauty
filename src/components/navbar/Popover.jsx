import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { appRoutes } from "../../core/constants/routes";

function MyPopover() {
  return (
    <Popover>
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center text-center gap-2 rounded-md text-gray-300 hover:bg-gray-700 focus:outline-none space-y-1 px-3 py-2 w-full">
            SERVICES
            <ChevronDownIcon className={clsx("size-5", open && "rotate-180")} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="sm:mt-3 xs:w-full text-end sm:w-56 z-50 flex flex-col text-white bg-black rounded-b-xl"
          >
            <Link
              className="m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
              to={appRoutes["laser-hair-removal"]}
            >
              Laser Hair Removal
            </Link>
            <Link
              className="m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
              to={appRoutes["derma-frac"]}
            >
              Derma-frac
            </Link>
            <Link
              className="m-2 p-2 text-gray-300 hover:bg-gray-700 rounded-md"
              to={appRoutes["hydra-facial"]}
            >
              Hydrafacial
            </Link>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default MyPopover;
