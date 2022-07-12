import React from "react";
import { useState } from "react";
import DirectionsIcon from "@mui/icons-material/Directions";

const Card = () => {
  const [heading, setHeading] = useState(false);
  const hoverChange = () => {
    setHeading(false);
  };
  const newHover = () => {
    setHeading(true);
  };

  return (
    <div className="containorCard w-80 max-h-96 bg-red-200 transition-all hover:scale-105 cursor-pointer mx-10">
      <div className="header w-full h-12 bg-[#FF5E0E] flex justify-center items-center ">
        <h1 className="text-white">Backup Infra</h1>
      </div>
      <div className="containorBody w-full max-h-38 bg-white flex flex-col justify-between items-center overflow-y-scroll">
        <div
          className="heading w-full flex justify-center items-center m-2 transition-all hover:bg-gray-50"
          onMouseOver={hoverChange}
          onMouseLeave={newHover}
        >
          {heading ? (
            <h1 className="m-1">Host : 4</h1>
          ) : (
            <h1 className="m-1 text-[#FF5E0E]">
              Know More <DirectionsIcon />
            </h1>
          )}
        </div>
        <h1 className="m-1">Application : 4</h1>
        <div className="Application p-2 border border-dashed rounded-md border-slate-400 bg-gray-50 w-48 m-3 flex justify-center flex-col">
          <h1 className="m-1 text-sm">
            MSSQL : <span>0</span>
          </h1>
          <h1 className="m-1 text-sm">
            My-SQL : <span>3</span>
          </h1>
          <h1 className="m-1 text-sm">DB2 : 0</h1>
          <h1 className="m-1 text-sm">Hyper-V : 1</h1>
        </div>
        <h1 className="m-1">Storages : 4</h1>
        <h1 className="m-1">Media Pool : 4</h1>
      </div>
    </div>
  );
};

export default Card;
