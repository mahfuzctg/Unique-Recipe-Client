import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  return (
    <div className=" glass w-full h-screen text-center pt-24" id="error-page">
      <h1>Oops!</h1>
      <p className="text-2xl font bold">Sorry bro! ei name page nai!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
