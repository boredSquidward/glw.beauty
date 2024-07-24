export const classNameHandler = (path, location) => {
  const windowWidth = window.innerWidth;

  if (location.pathname === path) {
    return windowWidth >= 640
      ? "2xl:px-6 px-3 2xl:py-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md"
      : "w-full text-start px-3 py-2 bg-gray-900 text-white block text-sm font-medium rounded-md";
  } else {
    return windowWidth >= 640
      ? "2xl:px-6 px-3 2xl:py-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white text-sm font-medium rounded-md"
      : "w-full text-start px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white block text-sm font-medium rounded-md";
  }
};
