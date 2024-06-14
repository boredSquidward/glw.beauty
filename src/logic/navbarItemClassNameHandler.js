export const classNameHandler = (path, location) => {
  const windowWidth = window.innerWidth;

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
