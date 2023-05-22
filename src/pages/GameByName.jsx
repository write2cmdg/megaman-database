import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import Separator from "../components/Separator";
import { toast } from "react-toastify";
import MechFlySprite from "../components/MechFlySprite";
import Back from "../components/Back";

const GameByName = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://megaman-api-server.onrender.com/oneGameByName/" + id
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
        // display error message to user
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      `Delete Game: ${data.title} Permanently?`
    );
    if (confirmDelete) {
      axios
        .delete("https://megaman-api-server.onrender.com/deleteBoss/" + id)
        .then((response) => navigate(`/allBosses/`))
        .catch((err) => console.log(err));
      toast.success(`You've Permanently Deleted ${data.title}!`);
    }
  };

  return (
    <div className=" bg-slate-800/90">
      <Separator />
      {!data.title && (
        <div
          className="flex flex-col items-center p-10 font-press-start uppercase
        text-blue-100"
        >
          <h2 className="py-10 flex flex-row justify-center sm:text-xl text-lg uppercase font-bold text-blue-400">
            Game Not found.
          </h2>
          <Link
            to={`/createGame`}
            className="mx-auto py-2 min-w-fit px-4 md:mb-2 text-center w-fit text-blue-200 border-2 border-blue-200 rounded-2xl hover:text-yellow-300"
          >
            {" "}
            Create It?
          </Link>
          <MechFlySprite />
          <Back />
        </div>
      )}

      {data.title && (
        <div className="bg-slate-800/90 flex flex-row justify-evenly">
          <h2
            className="
            p-4 justify-center mx-auto
            text-blue-200 text-xl w-screen md:text-3xl text-center font-press-start uppercase
            "
          >
            {data.title}{" "}
          </h2>
        </div>
      )}

      {data.title && (
        <div className="lg:h-80 h-44  bg-slate-800/90 overflow-hidden overflow-y-auto scrollbar scrollbar-rounded-large scrollbar-thumb-blue-900 scrollbar-track-blue-900/40 hover:scrollbar-thumb-blue-200/50">
          <div className="h-full text-blue-200 p-4 text-sm lg:text-xl flex flex-col ml-8 justify-evenly">
            <div>
              <h2 className="capitalize">
                <strong className="uppercase font-press-start text-md align-middle">
                  Title:
                </strong>{" "}
                {data.title}
              </h2>
              <h2 className="capitalize">
                <strong className="uppercase font-press-start text-md align-middle">
                  Year:
                </strong>{" "}
                {data.year}
              </h2>
              <h2 className="capitalize">
                <strong className="uppercase font-press-start text-md align-middle">
                  Story:
                </strong>{" "}
                {data.story}
              </h2>
              <h2 className="capitalize">
                <strong className="uppercase font-press-start text-md align-middle">
                  Robot Masters:(
                  <span className="text-yellow-200">Scroll Down</span>){" "}
                </strong>
              </h2>
            </div>
          </div>

          <div className="text-blue-200 flex flex-col justify-around items-center">
            {data.bosses &&
              data.bosses.map((boss, ind) => (
                <div
                  key={ind}
                  className="w-3/4 flex flex-row justify-evenly items-center"
                >
                  <Link
                    to={`/oneBossByName/${boss}`}
                    className="mx-auto basis-1/2 sm:text-3xl text-lg capitalize hover:text-blue-200/50"
                  >
                    <strong>{boss}</strong>
                  </Link>

                  <img
                    className="mx-auto grow-0 h-24 border-2 border-blue-600 rounded-lg"
                    src={`/images/${boss.replace(" M", "m")}.png`}
                    onError={({ currentTarget }) => {
                      currentTarget.onError = null;
                      currentTarget.src = "/images/Dr_Wily.png";
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}

      {data && data.title && (
        <div className="bg-slate-800/90 flex flex-row p-2 md:justify-evenly justify-between uppercase font-press-start text-xs md:text-xl text-center">
          <Link
            className=" text-lg text-blue-200 underline hover:text-yellow-300"
            to={`/updateGame/${data._id} `}
          >
            update
          </Link>
          <Back />
          <button
            onClick={(e) => handleDelete(data._id)}
            className="font-extrabold text-lg text-red-800 underline hover:text-yellow-300 uppercase"
          >
            delete
          </button>
        </div>
      )}

      <Separator />
    </div>
  );
};

export default GameByName;
