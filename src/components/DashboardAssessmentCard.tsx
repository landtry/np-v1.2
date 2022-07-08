import React from "react";
import SettingsIcon from "../icons/SettingsIcon";
import ProgressRing from "./ProgressRing";

function DashboardAssessmentCard() {
  return (
    <li className="col-span-1 flex flex-col text-center justify-between items-center bg-white rounded-2xl shadow-custom  h-68 border border-custom-slate-300 py-4 px-5">
      <div className="flex justify-between items-center relative w-full gap-3">
        <div className="flex items-center">
          <span className="uppercase text-3xs font-bold text-gray-500 tracking-wider">
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
          <span className="uppercase text-3xs font-bold text-gray-500 tracking-wider">
            Score
          </span>
          <span className="w-2"></span>
          <span>20</span>
          <sup className="mt-2">%</sup>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-base text-custom-slate-900">
          Assessment Name
        </span>
        <div className="h-2"></div>
        <span className="text-slate-400 text-xs">ISO 27001</span>
      </div>

      <div className="flex justify-between items-center w-full">
        <span className="text-custom-gray-400 text-xs font-medium">
          Updated 00/00/0000
        </span>
        <SettingsIcon click={() => {}} />
      </div>
    </li>
  );
}

export default DashboardAssessmentCard;
