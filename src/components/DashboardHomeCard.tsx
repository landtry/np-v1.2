import React from "react";
import EntityIcon from "../icons/EntityIcon";

interface Props {
  name: string;
  overall_progress: Number;
}

function DashboardHomeCard({ name }: Props) {
  const overall_progress = 0;
  const progressPercent = -100 + overall_progress + "%";
  const progressStyles = {
    transform: "translateX(" + progressPercent + ")",
  };

  return (
    <li className="col-span-1 flex flex-col text-center justify-between items-center bg-white rounded-2xl shadow-custom  h-68 border border-custom-slate-300 py-4 px-5 hover:shadow-customlg transition-shadow duration-300">
      <div className="flex justify-between items-center relative w-full">
        <div className="font-bold text-sm">{overall_progress + "%"}</div>
        <div className="w-full ml-3 h-1.5 bg-custom-slate-300 rounded-full overflow-hidden relative">
          <div
            className={`w-full h-full absolute top-0 right-0 rounded-full bg-custom-blue`}
            style={progressStyles}></div>
        </div>
      </div>
      <div className="h-20 w-20">
        <EntityIcon src={null} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-custom-slate-900 text-lg font-bold capitalize">
          {name}
        </h3>
        <h6 className="text-xs font-medium text-custom-gray-400">ISO 27001</h6>
        <div className="h-2"></div>
      </div>
    </li>
  );
}

export default DashboardHomeCard;
