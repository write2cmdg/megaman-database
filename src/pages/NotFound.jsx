import React from "react";
import { Link } from "react-router-dom";
import Separator from "../components/Separator";
import Back from "../components/Back";

const NotFound = () => {
  return (
    <div className="bg-slate-800/90 flex flex-col justify-center">
      <Separator />
      <h2
        className="
        justify-center
        text-blue-200 text-xl w-full md:text-3xl text-center font-press-start uppercase
        "
      >
        Page not found
      </h2>
      <Link
        className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center text-blue-200 uppercase underline hover:text-yellow-300"
        to="/allBosses"
      >
        home
      </Link>

      <Back />
      <Separator />
    </div>
  );
};

export default NotFound;
