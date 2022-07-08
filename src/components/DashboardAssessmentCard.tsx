import React from "react";
import ProgressRing from "./ProgressRing";

function DashboardAssessmentCard() {
  return (
    <li className="col-span-1 flex flex-col text-center justify-between items-center bg-white rounded-2xl shadow-custom  h-68 border-1 border-custom-slate-300 py-4 px-5">
      <div className="flex justify-between items-center relative w-full gap-3">
        <div className="flex items-center">
          <span className="uppercase text-2xs font-bold text-gray-500 tracking-wider">
            Progress
          </span>
          <span className="w-2"></span>
          <ProgressRing
            radius={25}
            stroke={4.5}
            progress={10}
            topColor={"#317ce6"}
            bottomColor={"#D6DFEF"}
          />
        </div>
        <div className="flex items-center font-bold text-sm text-custom-slate-900">
          <span className="uppercase text-2xs font-bold text-gray-500 tracking-wider">
            Score
          </span>
          <span className="w-2 "></span>
          <span>20</span>
          <sup className="mt-2">%</sup>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-custom-slate-900 text-lg font-bold"></h3>
        <h6 className="text-xs font-medium text-custom-gray-400">ISO 27001</h6>
        <div className="h-2"></div>
      </div>
    </li>
  );
}

export default DashboardAssessmentCard;
