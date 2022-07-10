import React from "react";
import { getDate } from "../helpers/normalize";
import SettingsIcon from "../icons/SettingsIcon";
import ProgressRing from "./ProgressRing";

interface CardProps {
  name: string;
  standard: string;
  overall_progress: number;
  overall_score: number;
  last_updated: string;
}

function DashboardAssessmentCard(props: CardProps) {
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
            progress={props.overall_progress}
            topColor={"#317ce6"}
            bottomColor={"#D6DFEF"}
          />
        </div>
        <div className="flex items-center font-bold text-sm text-custom-slate-900">
          <span className="uppercase text-3xs font-bold text-gray-500 tracking-wider">
            Score
          </span>
          <span className="w-2"></span>
          <span>{props.overall_score}</span>
          <sup className="mt-2">%</sup>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-base text-custom-slate-900 capitalize">
          {props.name}
        </span>
        <div className="h-2"></div>
        <span className="text-slate-400 text-xs">
          {props.standard.split("_").join(" ").toUpperCase()}
        </span>
      </div>

      <div className="flex justify-between items-center w-full">
        <span className="text-custom-gray-400 text-xs font-medium">
          {`Updated ${getDate(props.last_updated).date}`}
        </span>
        <SettingsIcon click={() => {}} />
      </div>
    </li>
  );
}

export default DashboardAssessmentCard;
