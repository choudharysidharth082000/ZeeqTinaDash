import React from "react";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import DeleteIcon from "@mui/icons-material/Delete";
import LabelIcon from "@mui/icons-material/Label";
import InventoryIcon from "@mui/icons-material/Inventory";

const CardAgent = () => {
  return (
    <div className="containorCard border border-slate-400 mx-4">
      <div className="heading w-80 text-white bg-[#006169] flex justify-center p-4 items-center transition-all cursor-pointer flex-col">
        <h1>Atempo-VLS_d1</h1>
      </div>
      <div className="middle w-80 p-4 flex justify-around items-center text-[#006169]">
        <button>
          <QrCode2Icon />
        </button>
        <button>
          <DeleteIcon />
        </button>
        <button>
          <InventoryIcon />
        </button>
        <button>
          <LabelIcon />
        </button>
      </div>
      <div className="description flex flex-col justify-center p-2 w-80">
        <h2>Category : LIBRARY</h2>
        <h2 className="">Comment : <span className="text-sm">Atempo_VLS_on_ip-172-31-3-155</span></h2>
      </div>
    </div>
  );
};

export default CardAgent;
