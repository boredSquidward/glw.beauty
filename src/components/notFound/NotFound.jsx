import React from "react";
import { useNavigate, Link } from "react-router-dom";

import Scaffold from "../scaffold/Scaffold";
import { appRoutes } from "../../core/constants/routes";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Scaffold>
      <div className="h-screen text-center flex flex-col justify-center items-center">
        <div className=" text-9xl">☹️</div>
        <h1 className="font-bold text-5xl">404</h1>
        <h2 className="pt-2 text-xl text-gray-700">Page Not Found!</h2>
        <p className="pt-2">
          The page you are looking for doesn't exist or an other error occured.{" "}
          <br />
          <span onClick={goBack}>
            <Link className="text-blue-500">Go back</Link>
          </span>{" "}
          or head over to{" "}
          <Link className="text-blue-500" to={appRoutes.homePath}>
            home page
          </Link>{" "}
          to choose a new direction.
        </p>
      </div>
    </Scaffold>
  );
};

export default NotFound;
