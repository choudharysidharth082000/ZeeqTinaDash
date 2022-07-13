import React from "react";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import CloudOffIcon from '@mui/icons-material/CloudOff';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

const CardAgent = () => {
  return (
    <div className="containorCard border border-slate-400 mx-4">
      <div className="heading w-80 text-white bg-[#006169] flex justify-center p-4 items-center transition-all cursor-pointer flex-col">
        <h1>Catalog</h1>
      </div>
      <div className="middle w-80 p-4 flex justify-around items-center text-[#006169]">
        <button>
          <CloudOffIcon />
        </button>
        <button>
          <DeleteIcon />
        </button>
        {/* <button>
          <InventoryIcon />
        </button> */}
        <button>
          <PlayCircleFilledWhiteIcon />
        </button>
      </div>
      <div className="description flex flex-col justify-center p-2 w-80">
        <h2>Category : APPLICATION</h2>
        <h2>Type : <span className="text-sm">LINUX</span></h2>
        <h2>Comment : <span className="text-sm">catalog</span></h2>
        <h2 className="">Comment : <span className="text-sm">Atempo_VLS_on_ip-172-31-3-155</span></h2>
      </div>
      <div className="Actiosn w-80 my-2 flex justify-center items-center flex-col">
        <h1 className="p-4 border border-t-[#006169] border-b-[#006169] w-full flex justify-center items-center">Available Actions</h1>
        <div className="containorSchedules flex justify-around items-center w-full p-4">
            <button className="w-10 h-10 rounded-full bg-[#006169] text-white">A</button>
            <button className="w-10 h-10 rounded-full text-[#006169] border border-[#006169]">B</button>
            <button className="w-10 h-10 rounded-full text-[#006169] border border-[#006169]">C</button>
            <button className="w-10 h-10 rounded-full text-[#006169] border border-[#006169]">D</button>
        </div>
        <div className="status w-full p-4 flex justify-center items-center bg-[#CBE5CC]">
            <h1 className="text-[#146918]">Enabled</h1>
        </div>
      </div>
    </div>
  );
};

export default CardAgent;
