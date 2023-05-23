import axios from "axios";
import React, { useEffect, useState } from "react";

//rrd Imports
import { Link } from "react-router-dom";
import Separator from "../components/Separator";

const BossesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://megaman-api-server.onrender.com/allBosses")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Separator />

      <div className="bg-slate-800/90 flex flex-row justify-evenly">
        <h2
          className="
        p-4 justify-center mx-auto my-4
        text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
        "
        >
          All Robot Masters
        </h2>
      </div>

      <div className="lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50">
        <div className=" w-full text-blue-200">
          {data.map((d, ind) => (
            <div
              className="w-full flex flex-col items-center justify-between h-28"
              key={ind}
            >
              <div className="w-3/4 flex flex-row justify-around items-center">
                <Link
                  className="mx-auto basis-1/2 sm:text-3xl text-lg capitalize hover:text-blue-200/50"
                  to={`/oneBoss/${d._id}`}
                >
                  <strong>{d.name}</strong>
                </Link>
                <div className="basis-1/4 ">
                  {d.name && (
                    <img
                      className="mx-auto grow-0 max-h-24 border-2 border-blue-600 rounded-lg"
                      src={`/images/${d.name.replace(" M", "m")}.png`}
                      onError={({ currentTarget }) => {
                        currentTarget.onError = null;
                        currentTarget.src = "/images/Dr_Wily.png";
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center  ">
        <Link
          className="mx-auto my-4 py-2 px-8 text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300"
          to="/createBoss"
        >
          Add new Robot master
        </Link>
      </div>

      <Separator />
    </div>
  );
};

export default BossesPage;
